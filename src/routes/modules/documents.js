import { AuthLayout } from '@/layouts'

const documentsRouter = {
  path: '/documents',
  component: AuthLayout,
  redirect: 'noRedirect',
  name: 'auth',
  meta: {
    title: 'Usuarios',
    icon: 'chart',
  },
  children: [
    // {
    //   path: '',
    //   component: () => import('@/views/'),
    //   name: '',
    //   meta: { title: '', noCache: true },
    // },
  ],
}

export default documentsRouter
