<template>
  <div id="detailshop" v-if="Object.keys(shop).length !== 0">
      <div class="logo">
          <img :src="shop.logo">
          <span>{{shop.name}}</span>
      </div>
      <div id="shopdetial">
          <div class="shopdetial_l">
              <ul>
                  <li>
                      <h4>{{shop.sells | countWan}}</h4>
                      <span>总销量</span>
                  </li>
                  <li class="bdlir">
                      <h4>{{shop.goodsCount}}</h4>
                      <span>全部宝贝</span>
                  </li>
              </ul>
          </div>
          <div class="shopdetial_r">
              <ul>
                  <li v-for="(item,index) in shop.score" :key="index">
                      <span>{{item.name}}</span>
                      <span class="initcolor" :class="{activeColor:item.isBetter}">{{item.score}}</span>
                      <span class="initBgcolor" :class="{activeBgColor:item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
                  </li>
              </ul>
          </div>
      </div>
    <div class="shop">
        <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailShop',
    props: {
        shop: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        countWan(value){
            return value/10000+' 万'
        }
    }
}
</script>

<style scoped>
    #detailshop{
        width: 100%;
        padding: 25px 10px;
        border-bottom: 4px solid #eee;
    }
    .logo img {
        width: 45px;
    }
    .logo span {
        margin-left: 15px;
        font-size: 20px;
    }
    #shopdetial {
        display: flex;
        width: 100%;
        padding: 25px 0 15px;
        align-items: center;
    }
    #shopdetial div{
        flex: 1;
    }
    .shopdetial_l ul {
        display: flex;
    }
    .shopdetial_l ul li {
        flex: 1;
        text-align: center;
    }
    .shopdetial_l ul span {
        font-size: 12px;
    }
    .shopdetial_l ul li  h4 {
        margin-bottom: 10px;
    }
    .bdlir {
        border-right: 1px solid #ccc;
    }
    .shopdetial_r li {
        margin: 10px 0;
    }
    .shopdetial_r span {
        margin-left: 15px;
        font-size: 14px;
    }
    .initcolor {
        color: green;
    }
    .activeColor {
        color: red;
    }
    .initBgcolor {
        background-color: green;
        color: #fff;
    }
    .activeBgColor {
        background-color: red;
        color: #fff;
    }
    .shop {
        width: 100%;
        text-align: center;
    }
    .shop span {
        display: inline-block;
        padding: 8px 30px;
        background-color: #eee;
        border-radius: 10px;
    }
</style>