import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/redirect.tsx"),
    layout("routes/blog/layout.tsx", [
        route("blog/:slug", "routes/blog/blog.tsx"),
    ]),
] satisfies RouteConfig;
