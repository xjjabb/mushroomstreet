<template>
  <NavBar class="nav_bar"><div slot="center">购物街</div></NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
    name: 'HomeNavBar',
    components: {
      NavBar
    }
}
</script>

<style scoped>
.nav_bar {
    background-color: #ff8198;
    color: #fff;
}
</style>