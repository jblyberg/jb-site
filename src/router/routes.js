const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
      },
      {
        path: '/card-generator',
        component: () => import('pages/PageCardGenerator.vue'),
      },
      {
        path: '/about',
        component: () => import('pages/PageAbout.vue'),
      },
      {
        path: '/darien-statements',
        component: () => import('pages/PageDarienStatements.vue'),
        alias:
          '/2009/04/03/the-darien-statements-on-the-library-and-librarians',
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
