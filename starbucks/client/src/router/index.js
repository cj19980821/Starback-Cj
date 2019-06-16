import Vue from "vue";
import vueRouter from "vue-router";

Vue.use(vueRouter);

// import Home from "../views/homeFirst.vue";
// import Homex from "../views/home/index.vue";
// import Login from "../views/login/index.vue";

const router = new vueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/homeFirst",
            component: () => import('@/views/homeFirst.vue')
        },
        {
            path: "/home",
            meta: {
                title: '加班/休假'
            },
            component: () => import('@/views/home/index.vue')
        },
        {
            path: "/search",
            component: () => import('@/views/search/index.vue'),
            meta: {
                title: '搜索'
            }
        },
        {
            path: "/login",
            component: () => import('@/views/login/index.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: "/detail/:type/:id",
            component: () => import('@/views/detail/index.vue'),
            name:'detail',
            props:true,
            meta: {
                title: '详情'
            }
        }
    ]
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router;