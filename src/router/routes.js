
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DespesaPage.vue') },
      { path: '/Guia', component: () => import('pages/Guia.vue') }
    ]
  },


  // {
  //   path: '/pages/Home',
  //   component: () => import('pages/Home/iconPage.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Home/iconPage.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
