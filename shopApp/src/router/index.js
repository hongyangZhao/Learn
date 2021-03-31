import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/page/cart'
import Addr from '@/page/address'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'carts',
      component: Cart
    },
    {
      path: '/address',
      name: 'addr',
      component: Addr
    }
  ]
})
