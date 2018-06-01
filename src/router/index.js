import Vue from 'vue'
import Router from 'vue-router'
import Subreddit from '@/components/Subreddit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Subreddit',
      component: Subreddit
    }
  ]
})
