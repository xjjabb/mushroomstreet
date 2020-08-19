import Vue from 'vue'
import VueRouter from 'vue-router';

const Home=()=>import('../views/home/Home.vue');
const Category=()=>import('../views/category/CateGory.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Profile=()=>import('../views/profile/Profile.vue')

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes=[
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        meta: {
            name: '蘑菇街-首页'
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            name: '蘑菇街-分类'
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            name: '蘑菇街-购物车'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            name: '蘑菇街-我的'
        }
    }
]

const router=new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    document.title=to.meta.name;
    next();
})
export default router