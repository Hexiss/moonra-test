import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/podcasts',
    name: 'Podscasts',
    component: () => import('../views/Podcasts.vue')
  },
  {
    path: '/videos',
    name: 'Vidéos',
    component: () => import('../views/Videos.vue')
  },
  {
    path: '/coaching',
    name: 'Coaching',
    component: () => import('../views/Coaching.vue')
  },
  {
    path: '/moncompte',
    name: 'MonCompte',
    component: () => import('../views/MonCompte.vue')
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/suivi',
    name: 'Suivi',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/login/Signup.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/login/ForgotPassword.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
