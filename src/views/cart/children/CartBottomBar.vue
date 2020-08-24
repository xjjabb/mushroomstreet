<template>
  <div id="cartbottombar">
      <span><input type="checkbox" @click="checkAll" :class="{check:isCheckedAll}"/>全选</span>
      <span class="totalPrice">合计:{{totalPrice}}</span>
      <span>{{checkedlength}}</span>
  </div>
</template>

<script>
export default {
    name: 'CartBottomBar',
    data(){
        return {
            
        }
    },
    computed: {
        //总价
        totalPrice(){
            return "￥"+this.$store.state.cartList.filter((item)=>{
                return item.checked;
            }).reduce((pre,item)=>{
                return pre+item.price*item.count;
            },0);
        },
        //买的件数
        checkedlength(){
            return "共"+this.$store.state.cartList.filter((item)=>{
                return item.checked
            }).reduce((pre,item)=>{
                return pre+item.count;
            },0)+"件 去结算";
        },
        //判断是否选中全选
        isCheckedAll(){
            if(this.$store.state.cartList.length==0){
                return false
            }
            return !this.$store.state.cartList.find(item=>!item.checked)
        }
    },
    methods: {
        checkAll(){
            this.$store.commit('checkAll',this.isCheckedAll);
        }
    }
}
</script>

<style scoped>
    #cartbottombar {
        display: flex;
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;
        height: 40px;
        border-top: 1px solid #ccc;
        line-height: 40px;
        background-color: #fff;
    }
    span {
        flex: 1;
    }
    #cartbottombar span:nth-child(3) {
        color: #fff;
        text-align: center;
        background-color: #ff8198;
    }
    input {
        width: 15px;
        height: 15px;
        border: 1px solid #ff8198;
        margin: 0 10px;
    }
    .check {
        background-color: #ff8198;
    }
</style>