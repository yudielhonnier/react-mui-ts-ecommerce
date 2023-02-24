import { lazy } from "react";
import type RouteConfig from "@/routing/RouteConfig";
import Checkout from "./Checkout";

const Products = lazy(async () => import("./Products"));

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
