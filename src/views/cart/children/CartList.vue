<template>
  
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'CartList',
    computed: {
        ...mapGetters(['cartListLength'])
    }
}
</script>

<style>

</style>