<template>
  <div class="backtop" v-if="btnFlag" @click="backTop">
      <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data(){
    return {
      btnFlag: false,//是否显示返回顶部
      backY: 2000,//多少时显示回到顶部
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop;
      if (that.scrollTop > 2000) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    bottom: 55px;
    right: 10px;
  }
  .backtop img {
    width: 43px;
  }
</style>