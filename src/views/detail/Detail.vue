<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :banners="banners"></DetailSwiper>
    <DetailGoods :goods="goods"></DetailGoods>
  </div>
</template>

<script>
//详情页子组件
import DetailNavBar from './children/DetailNavBar.vue';
import DetailSwiper from './children/DetailSwiper.vue';
import DetailGoods from './children/DetailGoods.vue';
//请求
import {getDetail,Goods} from 'network/detail.js';
export default {
    name: 'Detail',
    data(){
      return {
        iid: null,//商品id
        banners: [],//详情页轮播图
        goods: {},//商品基本信息
      }
    },
    components: {
      DetailNavBar,//详情页顶部
      DetailSwiper,//详情页轮播图
      DetailGoods,//商品基本信息
    },
    created(){
      //保存iid
      this.iid=this.$route.params.iid;

      //请求数据
      getDetail(this.iid).then(res=>{
        console.log(res);
        //轮播图
        this.banners=res.data.result.itemInfo.topImages;
        this.goods=new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services);
      })
    }
}
</script>

<style scoped>

</style>