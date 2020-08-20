<template>
  <div class="backtop" @click="backtopClick">
      <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
    name: 'BackTop',
    methods: {
      backtopClick(){
        var timer = null;
        this.scrollTop(timer);
      },
      scrollTop(timer){
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function sTop(){
          var top = document.body.scrollTop || document.documentElement.scrollTop;
        	if(top > 0){
        		document.body.scrollTop = document.documentElement.scrollTop = top - 80;
        		timer = requestAnimationFrame(sTop);
        	}else{
        		cancelAnimationFrame(timer);
        	} 
        });
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