<template>
    <ul id="tabcontrol">
        <li v-for="(item,index) in titles" :key="index">
            <span :class="{active:currentIndex==index}" @click="btnClick(index)">{{item}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TabControl',
    data(){
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        btnClick(index){
            this.currentIndex=index;
        }
    }
}
</script>

<style scoped>
#tabcontrol {
    display: flex;
}
#tabcontrol li {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
span {
    padding: 5px;
}
.active {
    color: #ff5777;
    border-bottom: 2px solid #ff5777;
}
</style>