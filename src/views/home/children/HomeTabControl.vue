<template>
  <TabControl :titles="titles" class="tabcontrol"></TabControl>
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
    }
}
</script>

<style scoped>
.tabcontrol {
    position: sticky;
    top: 44px;
}
</style>