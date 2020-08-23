<template>
  <ul id="detailbottombar">
      <li>客服</li>
      <li>店铺</li>
      <li>收藏</li>
      <li @click="addCart">加入购物车</li>
      <li @click="buyClick">购买</li>
  </ul>
</template>

<script>
export default {
    name: 'DetailBottomBar',
    methods: {
        addCart(){
            console.log('1');
        },
        buyClick(){
            alert('该功能为实现');
        }
    }
}
</script>

<style scoped>
#detailbottombar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .3);
}
li {
    line-height: 49px;
}
ul li:nth-child(-n+3) {
    width: 16%;
    color: #000;
}
ul li:nth-child(n+4) {
    flex: 1;
    color: #fff;
}
ul li:nth-child(4) {
    color: #000;
     background-color: #eecf09;
}
ul li:nth-child(5) {
    color: #fff;
    background-color: #ff8198;
}
</style>