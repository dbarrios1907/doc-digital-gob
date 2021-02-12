import Vue from 'vue'
import Router from 'vue-router'
import { constantRoutes } from '@/routes'

Vue.use(Router)

const configRoutes = () => {
  return constantRoutes.map(route => {
    if (route.async) {
      return {
        component: () => import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`),
        ...route,
      }
    }
    return route
  })
}

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes(),
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
