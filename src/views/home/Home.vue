<template>
  <div id="home">
    <HomeNavBar class="homenavbar"></HomeNavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommends="recommends"></HomeRecommend>
    <HomeFeature></HomeFeature>
    <HomeTabControl></HomeTabControl>
    <Goods :goods="goods.pop.list"></Goods>
  </div>
</template>

<script>
//公共组件
import Goods from 'components/content/goods/Goods.vue';
//首页子组件
import HomeNavBar from './children/HomeNavBar.vue';
import HomeSwiper from './children/HomeSwiper.vue';
import HomeRecommend from './children/HomeRecommend.vue';
import HomeFeature from './children/HomeFeature.vue';
import HomeTabControl from './children/HomeTabControl.vue';
//请求
import {getHomeMultdata,getHomeGoods} from 'network/home.js';
export default {
    name: 'Home',
    data(){
      return {
        banners: [],//轮播图
        recommends: [],//首页导航
        goods: {
          'pop': {page:0,list:[]},
          'new': {page:0,list:[]},
          'sell': {page:0,list:[]}
        },//商品
      }
    },
    components: {
      HomeNavBar,//首页顶部
      HomeSwiper,//首页轮播图
      HomeRecommend,//首页导航
      HomeFeature,//流行推荐
      HomeTabControl,//商品导航栏
      Goods,//商品列表
    },
    created(){
      //请求轮播图和首页导航
      this.getHomeMultdata();
      //请求商品信息
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      getHomeMultdata(){
        getHomeMultdata().then(res=>{
          this.banners=res.data.data.banner.list;
          this.recommends=res.data.data.recommend.list;
        });
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page+=1;
        });
      }
    }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.homenavbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>