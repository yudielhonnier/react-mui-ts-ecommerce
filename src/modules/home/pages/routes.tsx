import { lazy } from 'react';

import type RouteConfig from '@/routing/RouteConfig';

const Products = lazy(async () => import('./Products'));
const SelectedProducts = lazy(async () => import('./Shopping'));
const Checkout = lazy(async () => import('./Checkout'));
const Orders = lazy(async () => import('./Orders'));

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
