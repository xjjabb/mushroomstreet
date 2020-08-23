<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :banners="banners"></DetailSwiper>
    <DetailGoods :goods="goods"></DetailGoods>
    <DetailShop :shop="shop"></DetailShop>
    <DetailImg :detailImgInfo="detailImgInfo"></DetailImg>
    <DetailGoodsParam :goodsParams="goodsParams"></DetailGoodsParam>
    <DetailDiscuss :discuss="discuss"></DetailDiscuss>
    <DetailRecommends :goods="recommends"></DetailRecommends>
    <BackTop></BackTop>
  </div>
</template>

<script>
//公共组件
import BackTop from "components/content/backtop/BackTop.vue";
//详情页子组件
import DetailNavBar from './children/DetailNavBar.vue';
import DetailSwiper from './children/DetailSwiper.vue';
import DetailGoods from './children/DetailGoods.vue';
import DetailShop from './children/DetailShop.vue';
import DetailImg from './children/DetailImg.vue';
import DetailGoodsParam from './children/DetailGoodsParam.vue';
import DetailDiscuss from './children/DetailDiscuss.vue';
import DetailRecommends from './children/DetailRecommends.vue';
//请求
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js';
export default {
    name: 'Detail',
    data(){
      return {
        iid: null,//商品id
        banners: [],//详情页轮播图
        goods: {},//商品基本信息
        shop: {},//店铺信息
        detailImgInfo: {},//商品详情图片
        goodsParams:{},//商品参数信息
        discuss: {},//商品评论
        recommends: [],//推荐商品
      }
    },
    components: {
      DetailNavBar,//详情页顶部
      DetailSwiper,//详情页轮播图
      DetailGoods,//商品基本信息
      DetailShop,//店铺信息
      DetailImg,//商品详情图片
      DetailGoodsParam,//商品参数信息
      DetailDiscuss,//商品评论信息
      DetailRecommends,//商品推荐
      BackTop,//返回顶部
    },
    created(){
      //保存iid
      this.iid=this.$route.params.iid;
      //请求商品详情数据
      this.getDetail(this.iid);
      //请求推荐数据
      this.getRecommend();
    },
    destroyed(){
      console.log(123);
    },
    methods: {
      getDetail(iid){
        getDetail(iid).then(res=>{
          // console.log(res);
          //轮播图
          this.banners=res.data.result.itemInfo.topImages;
          //商品基本信息
          this.goods=new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services);
          //店铺信息
          this.shop=new Shop(res.data.result.shopInfo);
          //商品详情图片
          this.detailImgInfo=res.data.result.detailInfo;
          //商品参数信息
          this.goodsParams=new GoodsParam(res.data.result.itemParams.info,res.data.result.itemParams.rule);
          //商品评论
          if(res.data.result.rate.cRate!=0){
            this.discuss=res.data.result.rate;
          }
        });
      },
      getRecommend(){
        getRecommend().then(res=>{
          // console.log(res);
          this.recommends=res.data.data.list;
        })
      }
    }
}
</script>

<style scoped>
  #detail {
    padding-top: 44px;
    position: relative;
    background-color: #fff;
    z-index: 1000;
  }
</style>