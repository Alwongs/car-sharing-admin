import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'
import OrderList from '@/views/OrderList.vue'
import Error from '@/views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
        {
            path: 'order-list',
            name: 'order-list',
            component: OrderList  
        },      
        {
            path: 'error',
            name: 'error',
            component: Error  
        },      
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
