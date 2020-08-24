import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from './store/index.js';
import FastClick from 'fastclick';

//引入事件总线
Vue.prototype.$bus=new Vue();

//解决移动端300毫秒的延迟
FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
