import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sigon from '../views/sigon/Sigon'

Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/',
    name: 'Pages',
    component: () => import( '../views/pages/Pages'),
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/sigon',
    name: 'Sigon',
    component: Sigon
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/register/Register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
    let user = localStorage.getItem('user')
    if(to.path === '/sigon'){
      next()
    } else{
      user ? next() :next('/sigon')
    }
})
export default router
