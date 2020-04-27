import Vue from 'vue'
import VueRouter from 'vue-router'

import LatestMovie from '@/component/LatestMovie'
import Movie from '@/component/Movie'
import CreateMovie from '@/component/CreateMovie'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LatestMovie',
      component: LatestMovie
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/CreateMovie',
      name: 'CreateMovie',
      component: CreateMovie
    }
  ],
  mode: 'history'
})
