import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }]
})

// 判断是否需要登录权限 以及是否登录
// Router.beforeEach((to, from, next) => {
//     if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
//         if (localStorage.getItem('username')) { // 判断是否登录
//             next()
//         } else { // 没登录则跳转到登录界面
//             next({
//                 path: '/Register',
//                 query: { redirect: to.fullPath }
//             })
//         }
//     } else {
//         next()
//     }
// })