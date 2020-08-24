<template>
  <div id="cart">
    <CartNavBar></CartNavBar>
    <CartList></CartList>
  </div>
</template>

<script>
import CartNavBar from './children/CartNavBar.vue';
import CartList from './children/CartList.vue';
export default {
    name: 'Cart',
    components: {
      CartNavBar,
      CartList
    }
}
</script>

<style scoped>
  #cart {
    max-width: 640px;
    min-width: 320px;
    padding-top: 44px;
    widows: 100%;
    padding-bottom: 49px;
  }
</style>