import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/overview',
    name: 'overall',
    component: () => import('@/views/dashboard/dashboard_overall/Dashboard_overall.vue'),
  },
  {
    path: '/chatbot_dashboard',
    name: 'dashboard_chatbot',
    component: () => import('@/views/dashboard/dashboard_chatbot/Dashboard_chatbot.vue'),
  },
  {
    path: '/jobsearch_dashboard',
    name: 'dashboard_jobsearch',
    component: () => import('@/views/dashboard/dashboard_jobsearch/Dashboard_jobsearch.vue'),
  },
  {
    path: '/chatbot_data',
    name: 'chatbot-data',
    component: () => import('@/views/data_board/Data_chatbot.vue'),
  },
  {
    path: '/jobsearch_data',
    name: 'jobsearch-data',
    component: () => import('@/views/data_board/Data_jobsearch.vue'),
  },
  {
    path: '/user_info',
    name: 'user-info',
    component: () => import('@/views/data_board/Data_customer.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
