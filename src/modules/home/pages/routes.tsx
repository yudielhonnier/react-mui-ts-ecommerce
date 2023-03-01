import { lazy } from "react";
import type RouteConfig from "@/routing/RouteConfig";

const Products = lazy(async () => import("./Products"));
const SelectedProducts = lazy(async () => import("./SelectedProducts"));
const Checkout = lazy(async () => import("./Checkout"));

const config: RouteConfig[] = [
  {
    name: "Products",
    element: <Products />,
    index: true,
  },
  {
    name: "SelectedProducts",
    element: <SelectedProducts />,
    path: "selected-products",
  },
  {
    name: "Checkout",
    element: <Checkout />,
    path: "selected-products/checkout",
  },
];

export default config;
