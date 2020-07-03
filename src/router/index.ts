import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { Login, Register, ChangePwd, ChangeDetail } from '@/components/user/index'
import PageNotFound from '@/components/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/changePwd',
    name: 'changePwd',
    component: ChangePwd
  },
  {
    path: '/user/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user/changeDetail',
    name: 'changeDetail',
    component: ChangeDetail
  },
  {
    path: '/404*',
    name: '404',
    component: PageNotFound
  },
  {
    path: '*',
    name: 'unknown',
    redirect: to => {
      return '/404' + '?path=' + to.fullPath
    }
  }]
})
