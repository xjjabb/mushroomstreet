<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :banners="banners"></DetailSwiper>
  </div>
</template>

<script>
//详情页子组件
import DetailNavBar from './children/DetailNavBar.vue';
import DetailSwiper from './children/DetailSwiper.vue';
//请求
import {getDetail} from 'network/detail.js';
export default {
    name: 'Detail',
    data(){
      return {
        iid: null,//商品id
        banners: [],//详情页轮播图
      }
    },
    components: {
      DetailNavBar,//详情页顶部
      DetailSwiper,//详情页轮播图
    },
    created(){
      //保存iid
      this.iid=this.$route.params.iid;

      //请求数据
      getDetail(this.iid).then(res=>{
        console.log(res);
        //轮播图
        this.banners=res.data.result.itemInfo.topImages;
      })
    }
}
</script>

<style scoped>

</style>