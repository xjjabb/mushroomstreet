<template>
  <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
          <img :src="item">
      </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js';
export default {
    name: 'DetailSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    img {
        height: 350px;
    }
</style>