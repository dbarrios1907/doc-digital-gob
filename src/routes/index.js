/* Layout */
import { AuthLayout } from '@/layouts'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  {
    path: '/',
    component: AuthLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/usuarios',
    component: AuthLayout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'Usuarios',
        meta: { title: 'Usuarios', icon: 'mdi-account-supervisor-circle', affix: true },
      },
    ],
  },

  {
    path: '/documentos',
    component: AuthLayout,
    redirect: 'noRedirect',
    name: 'Documentos',
    meta: {
      title: 'Documentos',
      icon: 'mdi-file-multiple',
    },
    children: [
      {
        path: 'enviados',
        component: () => import('@/views/dashboard/index'),
        name: 'Enviados',
        meta: { title: 'Enviados' },
      },
      {
        path: 'recibidos',
        component: () => import('@/views/dashboard/index'),
        name: 'Recibidos',
        meta: { title: 'Recibidos' },
      },
      {
        path: 'por-firmar',
        component: () => import('@/views/dashboard/index'),
        name: 'Por Firmar',
        meta: { title: 'Por Firmar' },
      },
    ],
  },

  {
    path: '/oficina-de-partes',
    component: AuthLayout,
    redirect: 'noRedirect',
    name: 'root-oficina-partes',
    meta: {
      title: 'Oficina de Partes',
      icon: 'mdi-file-multiple',
    },
    children: [
      {
        path: 'enviados',
        component: () => import('@/views/dashboard/index'),
        name: 'Enviados',
        meta: { title: 'Enviados' },
      },
      {
        path: 'recibidos',
        component: () => import('@/views/dashboard/index'),
        name: 'Recibidos',
        meta: { title: 'Recibidos' },
      },
    ],
  },

  {
    path: '/administracion',
    component: AuthLayout,
    redirect: 'noRedirect',
    name: 'Administracion',
    meta: {
      title: 'Administración',
      icon: 'mdi-file-multiple',
    },
    children: [
      {
        path: 'usuarios',
        component: () => import('@/views/dashboard/index'),
        name: 'Usuarios',
        meta: { title: 'Usuarios', icon: 'mdi-account-supervisor-circle' },
      },
      {
        path: 'documentos',
        component: () => import('@/views/dashboard/index'),
        name: 'Documentos',
        meta: { title: 'Documentos', icon: 'mdi-file-multiple' },
      },
      {
        path: 'entidades',
        component: () => import('@/views/dashboard/index'),
        name: 'Entidades',
        meta: { title: 'Entidades', icon: 'mdi-file-multiple' },
      },
      {
        path: 'correos-de-notificacion',
        component: () => import('@/views/dashboard/index'),
        name: 'correos-de-notificacion',
        meta: { title: 'Correos de Notificación', icon: 'mdi-file-multiple' },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  // authRouter,
  // documentsRouter,
  // usersRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]
