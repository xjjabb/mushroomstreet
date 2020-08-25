import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from './store/index.js';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
import toast from 'components/common/toast/index.js';

//引入事件总线
Vue.prototype.$bus=new Vue();

//解决移动端300毫秒的延迟
FastClick.attach(document.body);

//图片懒加载
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
});

//引入toast 会执行对象的insatll
Vue.use(toast);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
