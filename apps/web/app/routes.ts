import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout('layouts/ChatLayout.tsx', [route("/", "routes/home.tsx")])] satisfies RouteConfig;
