<template>
    <ul class="goods">
       <li v-for="(item,index) in goods" :key="index" class="goodsItem" @click="itemClick(item.iid)">
           <img :src="item.show.img" alt="">
           <div class="goods_info">
                <p>{{item.title}}</p>
                <span class="price">￥{{item.price}}</span>
                <span class="collect"> 
                    <img src="~assets/img/common/collect.svg" alt="">
                    {{item.cfav}}
                </span>
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
    },
    methods: {
        itemClick(iid){
            this.$router.push('/detail/'+iid);
        }
    }
}
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        box-sizing: content-box;
        font-size: 14px;
    }
    .goodsItem {
        width: 46%;
        margin-bottom: 10px;
        text-align: center;
        color: #ff8198;
    }
    .goodsItem img {
        width: 100%;
        border-radius: 5px;
    }
    .goods_info {
        margin-top: 10px;
    }
    .goodsItem p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #000;
    }
    .collect {
        position: relative;
        color: #000;
        padding: 0 15px;
    }
    .collect img {
        position: absolute;
        top: 0;
        left: 5px;
        width: 15px;
        vertical-align: middle;
    }
</style>