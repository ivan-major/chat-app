import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomePage from '@/views/Home/HomePage.vue'
import DialogPage from '@/views/DialogPage/DialogPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: HomePage },
        { path: 'dialog/:id', name: 'dialog', component: DialogPage }
      ]
    },
  ],
})

export default router
