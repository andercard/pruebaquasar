
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home')
      },
      {
        path: 'estaciones',
        name: 'seasons',
        component: () => import('pages/Seasons')
      },
      { path: 'estacion/:id',
        name: 'season',
        component: () => import('pages/Season') 
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
