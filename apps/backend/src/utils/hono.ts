import { Hono } from "hono";


export function getHono() {
  const app = new Hono<{ Bindings: Cloudflare.Env }>();
  
  return app;
}