import { AuthLayout } from '@/layouts'

const authRouter = {
  path: '/auth',
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

export default authRouter
