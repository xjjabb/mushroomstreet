<template>
  <div id="home">
    <HomeNavBar></HomeNavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommends="recommends"></HomeRecommend>
  </div>
</template>

<script>
//首页子组件
import HomeNavBar from './children/HomeNavBar.vue';
import HomeSwiper from './children/HomeSwiper.vue';
import HomeRecommend from './children/HomeRecommend.vue';

//请求
import {getHomeMultdata} from 'network/home.js';
export default {
    name: 'Home',
    data(){
      return {
        banners: [],//轮播图
        recommends: []//首页导航
      }
    },
    components: {
      HomeNavBar,//首页顶部
      HomeSwiper,//首页轮播图
      HomeRecommend,//首页导航
    },
    created(){
      getHomeMultdata().then(res=>{
        this.banners=res.data.data.banner.list;
        this.recommends=res.data.data.recommend.list;
      })
    }
}
</script>

<style>

</style>