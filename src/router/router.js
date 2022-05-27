import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home'
import Movie from '../pages/Movie'
import MyMovie from '../pages/MyMovie'
import Error from '../pages/Error'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/filme/:id',
    component: Movie,
    props: true
  },
  {
    path: '/salvos',
    component: MyMovie
  },
  {
    path: '/pagina_nao_encontrada',
    component: Error
  },
  {
    path: '/:catcAll(.*)',
    redirect: '/pagina_nao_encontrada'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
