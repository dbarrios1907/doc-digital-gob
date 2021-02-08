import Layout from '@/layouts'

const authRouter = {
  path: '/auth',
  component: Layout,
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
