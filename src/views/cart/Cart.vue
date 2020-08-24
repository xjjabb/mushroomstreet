<template>
  <div id="cart">
    <CartNavBar></CartNavBar>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
//购物车子组件
import CartNavBar from './children/CartNavBar.vue';
import CartList from './children/CartList.vue';
import CartBottomBar from './children/CartBottomBar.vue';
export default {
    name: 'Cart',
    components: {
      CartNavBar,//顶部工具栏
      CartList,//购买商品详情
      CartBottomBar,//底部结算
    }
}
</script>

<style scoped>
  #cart {
    max-width: 640px;
    min-width: 320px;
    padding-top: 44px;
    widows: 100%;
    padding-bottom: 90px;
  }
</style>