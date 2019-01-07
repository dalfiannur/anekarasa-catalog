import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: () => import('@/components/Homepage')
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: () => import('@/components/Catalog')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/components/Product')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/components/Cart')
    },
    {
      path: '/select-table',
      name: 'SelectTable',
      component: () => import('@/components/SelectTable')
    }
  ]
})
