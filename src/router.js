import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
// import skills from './components/skills.vue'
import profile from './components/profile.vue'
import risico from './components/risico.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/risico',
      name: 'risico',
      component: risico
    }
  ]
})
