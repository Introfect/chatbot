import { Hono } from 'hono'
import { chatRoute } from './endpoints/chat';
import { getHono } from './utils/hono';
import { cors } from 'hono/cors';


const app = getHono()

app.use(cors({ origin: "*" }));

app.route('/api/v1', chatRoute);

export default app
