import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/categories',
      name: 'categories',
     
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/details/:food_name',
      name: 'details',
      component: () => import('./components/Details.vue')
    },
    {
      path: '/random',
      name:'random',
      component: () => import('./views/Random.vue')
    }
  ]
  
})
