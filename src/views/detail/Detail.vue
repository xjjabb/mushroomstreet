<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
  </div>
</template>

<script>
//详情页子组件
import DetailNavBar from './children/DetailNavBar.vue';

//请求
import {getDetail} from 'network/detail.js';
export default {
    name: 'Detail',
    data(){
      return {
        iid: null,//商品id
      }
    },
    components: {
      DetailNavBar
    },
    created(){
      //保存iid
      this.iid=this.$route.params.iid;

      //请求数据
      getDetail(this.iid).then(res=>{
        console.log(res);
      })
    }
}
</script>

<style scoped>

</style>