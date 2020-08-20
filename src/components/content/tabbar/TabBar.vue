<template>
 <div id="tabbar">
     <ul>
         <li :class="{active:currentIndex==1}" @click="btnClik(1,'/home')">
             <span>&#xe657;</span>
             <h4>首页</h4>
        </li>
         <li :class="{active:currentIndex==2}"  @click="btnClik(2,'/category')">
             <span>&#xe7f9;</span>
             <h4>分类</h4>
         </li>
         <li :class="{active:currentIndex==3}"  @click="btnClik(3,'/cart')">
             <span>&#xe610;</span>
             <h4>购物车</h4>
         </li>
         <li :class="{active:currentIndex==4}"  @click="btnClik(4,'/profile')">
             <span>&#xe63c;</span>
             <h4>我的</h4>
         </li>
     </ul>
 </div>
</template>

<script>
export default {
    name: 'TabBar',
    data(){
        return {
            currentIndex: 1
        }
    },
    methods: {
        btnClik(index,path){
            this.currentIndex=index;
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
    #tabbar {
        position: fixed;
        bottom: 0;
        height: 49px;
        width: 100%;
        max-width: 640px;
        min-width: 320px;
        border-top: 1px solid #ccc;
        background-color: #fff;
        z-index: 999;
    }
    ul {
        display: flex;
        height: 49px;
    }
    ul li {
        flex: 1;
        text-align: center;
        padding-top: 4px;
    }
    ul li span {
        font-family: "ico";
        font-size: 24px;
    }
    ul li h4 {
        font-weight: 400;
    }
    .active {
        color: #ff5777;
    }
</style>