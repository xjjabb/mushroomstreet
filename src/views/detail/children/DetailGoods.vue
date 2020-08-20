<template>
  <div class="goods">
      <p class="title">{{goods.title}}</p>
      <div class="goods_price">
        <span class="realPrice">{{goods.newPrice}}</span>
        <span class="oldPrice"><del>{{goods.oldPrice}}</del></span>
        <span class="discount">{{goods.discount}}</span>
      </div>
      <div class="other">
        <span v-for="(item,index) in goods.columns" :key="index">
            {{item}}
        </span>
      </div>
      <div class="service">
        <span v-for="(item,index) in goods.services" :key="index">
            {{item.name}}
        </span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailGoods',
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .goods {
        width: 100%;
        margin-top: 15px;
    }
    .title {
        font-size: 16px;
    }
    .goods_price {
        margin-top: 10px;
    }
    .realPrice {
        font-size: 24px;
        color: #ff8198;
    }
    .oldPrice {
        margin-left: 5px;
        color: #ccc;
    }
    .discount {
        margin-left: 15px;
        padding: 2px 10px;
        background-color: #ff8198;
        border-radius: 8px;
        color: #fff;
    }
    .other {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 14px;
        border-bottom: 1px solid rgba(100,100,100,.1);
    }
    .service {
        padding: 15px 0;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 4px solid #eee;
    }
    .service span {
        flex: 46%;
        margin-bottom: 3px;
    }
</style>