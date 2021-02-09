import { AuthLayout } from '@/layouts'

const usersRouter = {
  path: '/usuarios',
  component: AuthLayout,
  redirect: 'noRedirect',
  name: 'Usuarios',
  meta: {
    title: 'Usuarios',
    icon: 'chart',
  },
  children: [
    {
      path: 'keyboard',
      // component: () => import('@/views/usuarios'),
      name: 'Usuarios',
      meta: { title: 'Usuarios', noCache: true },
    },
  ],
}

export default usersRouter
