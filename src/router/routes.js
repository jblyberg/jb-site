/*jshint -W024 */

const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        name: 'front',
        path: '',
        component: () => import('pages/PageFront.vue'),
      },
      {
        name: 'ccgen',
        path: '/card-generator',
        component: () => import('pages/PageCardGenerator.vue'),
      },
      {
        path: '/card/:cardId',
        component: () => import('components/CatalogCards/CardExisting.vue'),
        props: true,
      },
      {
        name: 'resume',
        path: '/resume',
        component: () => import('pages/PageResume.vue'),
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('pages/PageAbout.vue'),
      },
      {
        name: 'contact',
        path: '/contact',
        component: () => import('pages/PageContact.vue'),
      },
      {
        name: 'darien',
        path: '/darien-statements',
        component: () => import('pages/PageDarienStatements.vue'),
        alias:
          '/2009/04/03/the-darien-statements-on-the-library-and-librarians',
      },
      {
        name: 'sopac',
        path: '/sopac',
        component: () => import('pages/PageSopac.vue'),
      },
      {
        name: 'newlibrary',
        path: '/new-darien-library',
        component: () => import('pages/PageNewLibrary.vue'),
      },
      {
        name: 'fcminecraft',
        path: '/fairfield-county-minecraft',
        component: () => import('pages/PageFCMinecraft.vue'),
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
