import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/man',
    name: 'man',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ManView.vue')
  },
  {
    path: '/woman',
    name: 'woman',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WomanView.vue')
  },
  {
    path: '/kids',
    name: 'kids',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KidsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/cart.vue')
  },
  // {
  //   // сопоставляется со всем, начинающимся с `/user-`
  //   path: '/user-*'
  // },
  // {
  //   path: '/user/:item.prodid', component: () => import('@/components/userFile.vue')
  // }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const User = {
//   template: '...',
//   watch: {
//     $route(user, home) {
//       // обрабатываем изменение параметров маршрута...
//     }
//   }
// }


export default router
