import Vue from 'vue'
import Router from 'vue-router'
import Subreddit from '@/components/Subreddit'
import PostsItem from '@/components/PostsItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Subreddit',
      component: Subreddit
    },
    {
      path: '/:id',
      name: 'Post',
      component: PostsItem
    }
  ]
})
