import { lazy } from "react";
import type RouteConfig from "@/routing/RouteConfig";

const Products = lazy(async () => import("./Products"));
const Checkout = lazy(async () => import("./Checkout"));

const config: RouteConfig[] = [
  {
    name: "Products",
    element: <Products />,
    index: true,
  },
  {
    name: "Checkout",
    element: <Checkout />,
    path: "checkout",
  },
];

export default config;
