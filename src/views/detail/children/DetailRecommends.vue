<template>
  <div id="goods">
      <h4>商品推荐</h4>
      <Goods :goods="goods"></Goods>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods.vue';
export default {
    name: 'DetailRecommends',
    props: {
        goods: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        Goods,//商品
    }
}
</script>

<style scoped>
#goods {
    padding-top: 20px;
}
#goods h4 {
    padding: 0 0 15px 10px;
    font-size: 22px;
    font-weight: 400;
}
</style>