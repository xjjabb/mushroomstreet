<template>
  <div id="detail">
    <DetailNavBar ref="DetailNavBar"></DetailNavBar>
    <DetailSwiper :banners="banners"></DetailSwiper>
    <DetailGoods :goods="goods"></DetailGoods>
    <DetailShop :shop="shop"></DetailShop>
    <DetailImg :detailImgInfo="detailImgInfo"></DetailImg>
    <DetailGoodsParam ref="DetailGoodsParam" :goodsParams="goodsParams"></DetailGoodsParam>
    <DetailDiscuss ref="DetailDiscuss" :discuss="discuss"></DetailDiscuss>
    <DetailRecommends ref="DetailRecommends" :goods="recommends"></DetailRecommends>
    <BackTop></BackTop>
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
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
import DetailBottomBar from './children/DetailBottomBar.vue';
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
        themeTopY: [],//主题的Y值
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
      DetailBottomBar,//底部工具栏
    },
    created(){
      //保存iid
      this.iid=this.$route.params.iid;
      //请求商品详情数据
      this.getDetail(this.iid);
      //请求推荐数据
      this.getRecommend();
      //点击跳到指定位置
      this.$bus.$on('clickTop',(index)=>{
        this.clickTop(index);
      });
    },
    updated(){
      //监听页面滚动
      window.addEventListener('scroll',this.windowDetail);
    },
    beforeDestroy(){
      //解绑图片加载监听的事件
      this.$bus.$off('imgLoad',this.getY); 
      window.removeEventListener('scroll',this.windowDetail);
    },
    mounted(){
      let refs = this.$refs;
      this.$bus.$on('imgLoad',this.getY);
    },
    methods: {
      getY(){
        this.themeTopY.length=0;
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.DetailGoodsParam.$el.offsetTop);
        this.themeTopY.push(this.$refs.DetailDiscuss.$el.offsetTop);
        this.themeTopY.push(this.$refs.DetailRecommends.$el.offsetTop);
      },
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
      },
      clickTop(index){
        document.documentElement.scrollTop=this.themeTopY[index]-44;
      },
      windowDetail(){
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop=scrollTop+44;
        // console.log(scrollTop);
        if(this.$refs.DetailNavBar){
          if(scrollTop<this.themeTopY[1]-44){
              this.$refs.DetailNavBar._data.currentIndex=0;
            }else if(scrollTop<this.themeTopY[2]-44){
              this.$refs.DetailNavBar._data.currentIndex=1;
            }else if(scrollTop<this.themeTopY[3]-44){
              this.$refs.DetailNavBar._data.currentIndex=2;
            }else {
              this.$refs.DetailNavBar._data.currentIndex=3;
          }
        }
      },
      //加入购物车
      addCart(){
        //获取购物车展示的信息
        const product={};
        product.image=this.banners[0];
        product.title=this.goods.title;
        product.desc=this.goods.desc;
        product.price=this.goods.realPrice;
        product.iid=this.iid;
        this.$store.dispatch('addCart',product).then(res=>{
          this.$toast.show(res,2000);
        });
      }
    }
}
</script>

<style scoped>
  #detail {
    padding-top: 44px;
    padding-bottom: 49px;
    position: relative;
    background-color: #fff;
    z-index: 1000;
  }
</style>