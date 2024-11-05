import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/report',
            component: () => import('../views/Report.vue')
        },
        {
            path: '/purchase',
            component: () => import('../views/Purchase.vue')
        }

    ]
})

export default router
