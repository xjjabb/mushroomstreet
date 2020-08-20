<template>
    <ul class="goods">
       <li v-for="(item,index) in goods" :key="index" class="goodsItem">
           <img :src="item.show.img" alt="">
           <div class="goods-info">
                <p>{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span class="collect">{{item.cfav}}</span>
           </div>
       </li>
    </ul>
</template>

<script>
export default {
    name: 'Goods',
    props: {
        goods: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
    .goodsItem {
        flex: 40%;
    }
    .goodsItem img {
        width: 100%;
        border-radius: 5px;
    }
    .goodsItem p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>