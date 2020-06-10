import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pages from '../views/pages/Pages'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      name:'/'
    },
  {
    path: '/',
    component: Pages,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
      {
        path: '/8',
        name: '8',
        component: () => import( '../views/out/Out'),
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
  document.title = to.meta.title
  let user = localStorage.getItem('user')
  if (to.path === '/sigon' || to.path === '/register'){
  next()
  }else{
    user ? next() : next('sigon')

  }
})

export default router
