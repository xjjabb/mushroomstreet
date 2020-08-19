<template>
  <div id="home">
    <HomeNavBar></HomeNavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
  </div>
</template>

<script>
//首页子组件
import HomeNavBar from './children/HomeNavBar.vue';
import HomeSwiper from './children/HomeSwiper.vue';

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
      HomeNavBar,//首页导航
      HomeSwiper,//首页轮播图
    },
    created(){
      getHomeMultdata().then(res=>{
        this.banners=res.data.data.banner.list;
        this.recommends=res.data.data.recommend;
      })
    }
}
</script>

<style>

</style>