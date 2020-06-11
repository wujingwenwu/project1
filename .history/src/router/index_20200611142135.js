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
        path: '/out',
        name: 'out',
        component: () => import( '../views/out/Out'),
        meta:{
          title:'退出系统'
        }
      },
      {
        path: '/release',
        name: 'Release',
        component: () => import( '../views/release/Release'),
        meta:{
          title:'发布'
        }
      },
      {
        path: '/release',
        name: 'Release',
        component: () => import( '../views/Tab/Tab'),
        meta:{
          title:''
        }
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
    component: () => import( '../views/sigon/Sigon'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/register/Register'),
    meta:{
      title:'注册'
    }
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
