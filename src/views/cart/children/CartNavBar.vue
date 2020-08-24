<template>
  <NavBar class="cartnavbar">
      <div slot="center">购物车({{cartListLength}})</div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import {mapGetters} from 'vuex';
export default {
    name: 'CartNavBar',
    components: {
        NavBar
    },
    computed: {
        ...mapGetters(['cartListLength'])
    }
}
</script>

<style scoped>
.cartnavbar {
    max-width: 640px;
    min-width: 320px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 18px;
    color: #fff;
    background-color: #ff8198;
}
</style>