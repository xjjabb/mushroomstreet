<template>
  <div class="toast">
      <div v-show="show">{{message}}</div>
  </div>
</template>

<script>
export default {
    name: 'Toast',
    data(){
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(message="没有设置message",duration=2000){
            this.isShow=true;
            this.message=message;
            setTimeout(() => {
                this.isShow=false;
                this.message='';
            }, duration);
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: rgba(0, 0, 0, .6);
        color: #fff;
        transform: translate(-50%);
        z-index: 10000;
    }
</style>