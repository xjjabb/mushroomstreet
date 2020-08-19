<template>
    <Swiper>
        <SwiperItem v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title" :title="item.title">
            </a>
        </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js';
export default {
    name: 'HomeSwiper',
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            dafault(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>