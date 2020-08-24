<template>
  <ul id="cartlist">
      <li v-for="(item,index) in getCartList" :key="index" class="itemList">
          <div>
            <input type="checkbox" @click="checkedClick(index)" :class="{check:item.checked}"/>
          </div>
          <div>
              <img :src="item.image" alt="">
           </div>
          <div>
              <p>{{item.title}}</p>
              <p>{{item.desc}}</p>
              <span class="left price">￥{{item.price}}</span>
              <span class="right count">x{{item.count}}</span>
          </div>
      </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'CartList',
    data(){
        return {
            ischeck: true
        }
    },
    computed: {
        ...mapGetters(['getCartList'])
    },
    methods: {
        checkedClick(index){
            // this.$store.state.cartList[index].checked=!this.$store.state.cartList[index].checked;
            this.$store.commit('updateChecked',index);
        }
    }
}
</script>

<style scoped>
    #cartlist {
        max-width: 640px;
        min-width: 320px;
        width: 100%;
        padding: 10px 5px 0;
    }
    .itemList {
        width: 100%;
        display: flex;
    }
    .itemList div:nth-child(1) {
        flex: 20%;
        display: flex;
        align-items: center;
    }
    .itemList div:nth-child(2) {
        flex: 30%;
    }
    .itemList div:nth-child(3) {
        padding-left: 10px;
        overflow: hidden;
    }
    .itemList img {
        width: 80px;
        height: 100px;
        border-radius: 10px;
    }
    p {
        padding-top: 10px;
        padding-bottom: 10px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .price {
        font-size: 18px;
        color: #ff8198;
    }
    .count {
        margin-right: 15px;
    }
    input {
        width: 10px;
        height: 10px;
        border: 1px solid #ff8198;
        margin: 0 10px;
    }
    .check {
        background-color: #ff8198;
    }
</style>