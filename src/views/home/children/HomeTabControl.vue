<template>
  <TabControl :titles="titles" class="tabcontrol" @tabClick="tabClick"></TabControl>
</template>

<script>
import TabControl from 'components/content/tabcontrol/TabControl.vue';
export default {
    name: 'HomeTabControl',
    data(){
        return {
            titles: ['流行','新款','精选']
        }
    },
    components: {
        TabControl
    },
    methods: {
        tabClick(index){
            this.$emit('tabClick',index);
        }
    }
}
</script>

<style scoped>
.tabcontrol {
    position: sticky;
    top: 44px;
    z-index: 999;
}
</style>