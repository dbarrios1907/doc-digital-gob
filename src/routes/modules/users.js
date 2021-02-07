import Layout from '@/layouts'

const chartsRouter = {
  path: '/usuarios',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Usuarios',
  meta: {
    title: 'Usuarios',
    icon: 'chart',
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true },
    },
  ],
}

export default chartsRouter
