import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Index',
    component: ()=>import("../views/login/Index"),
    meta: {
      status: false
    }
  },*/
  {
    path: '/',
    name: 'Index',
    component: ()=>import("../views/login/Iindex"),
    //component: ()=>import("../views/Homepage/TEST/TESTpage"),
    meta: {
      status: false
    }
  },
  {
    path: '/Err',
    name: 'Err',
    component: ()=>import("../views/err/error"),
  },
  {
    path: '/BDpage',
    name: 'BDpage',
    component: ()=>import("../views/Homepage/BD/BDpage"),
  },
  {
    path: '/TESTpage',
        name: 'TESTpage',
      component: ()=>import("../views/Homepage/TEST/TESTpage"),
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  console.log(from)
  console.log(to)
  if ('/' === to.path || from.meta.status){
    next();
  }else {
    from.meta.status = true
    next('/Err');
  }
})

export default router
