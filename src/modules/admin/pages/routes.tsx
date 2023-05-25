import { lazy } from 'react';

import type RouteConfig from '@/routing/RouteConfig';

const Categories = lazy(async () => import('./Categories'));

const config: RouteConfig[] = [
  {
    name: 'Categories',
    element: <Categories />,
    path: 'admin/categories',
  },
];

export default config;
