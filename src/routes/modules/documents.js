import { AuthLayout } from '@/layouts'

const documentsRouter = {
  path: '/documents',
  component: AuthLayout,
  redirect: 'noRedirect',
  name: 'auth',
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
