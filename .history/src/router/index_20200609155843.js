import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Form } from 'element-ui'

Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/',
    name: 'Pages',
    component: () => import( '../views/pages/Pages'),
    children:[
      {
        path: '/',
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
    component: () => import( '../views/sigon/Sigon')
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
router.beforeEach((to,Form,next) => {
  let user = localStorage.getItem('user')
  if (to.path === '/sigon' || to.path === '/register'){
  next()
  }else{
    user ? next() : next('sigon')
    
  }
})
export default router
