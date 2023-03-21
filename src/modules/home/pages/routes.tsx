import { lazy } from 'react';

import type RouteConfig from '@/routing/RouteConfig';

const Products = lazy(async () => import('./Products'));
const SelectedProducts = lazy(async () => import('./ShoppingCart'));
const Checkout = lazy(async () => import('./Checkout'));
<<<<<<< HEAD
const Orders = lazy(async () => import('./Orders'));
=======
>>>>>>> 6d42ad3 (fix: lint fix)

const config: RouteConfig[] = [
  {
    name: 'Products',
    element: <Products />,
    index: true,
  },
  {
    name: 'SelectedProducts',
    element: <SelectedProducts />,
    path: 'shopping-cart',
  },
  {
    name: 'Orders',
    element: <Orders />,
    path: 'orders',
  },
  {
    name: 'Checkout',
    element: <Checkout />,
    path: 'shopping-cart/checkout',
  },
];

export default config;
