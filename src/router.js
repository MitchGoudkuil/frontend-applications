import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/skills.vue'
import risico from './components/risico.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/risico',
      name: 'risico',
      component: risico
    }
  ]
})
