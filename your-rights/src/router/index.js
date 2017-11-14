import Vue from 'vue'
import Router from 'vue-router'
import Access from '@/components/Common/Access'
import OrderService from '@/components/OrderService/OrderService'
import OrderServiceCreate from '@/components/OrderService/OrderServiceCreate'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Access',
      component: Access
    },
    {
      path: '/order',
      name: 'OrderService',
      component: OrderService
    }
  ]
})
