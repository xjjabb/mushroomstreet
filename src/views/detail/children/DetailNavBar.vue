<template>
  <NavBar>
      <div slot="left">
          <img src="~assets/img/common/back.svg" @click="backClick">
      </div>
      <div slot="center">
          <ul>
              <li v-for="(item,index) in titles" :key="index" :class="{active:currentIndex==index}" @click="btnClick(index)">
                  {{item}}
              </li>
          </ul>
      </div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
    name: 'DetailNavBar',
    data(){
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    components: {
      NavBar
    },
    methods: {
        btnClick(index){
            this.currentIndex=index;
        },
        backClick(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    ul {
        display: flex;
    }
    ul li {
        flex: 1;
        font-size: 14px;
    }
    img {
        width: 18px;
    }
    .active {
        color: #ff8198;
    }
</style>