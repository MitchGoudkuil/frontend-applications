import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
// import skills from './components/skills.vue'
import profile from './components/profile.vue'
import risico from './components/risico.vue'

import login from './components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      props: true
    },
    {
      path: '/risico',
      name: 'risico',
      component: risico,
      props: true
    }
  ]
})
