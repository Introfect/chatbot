import { Hono } from 'hono'
import { chatRoute } from './features/chat';

const app = new Hono()

app.route('/api/v1', chatRoute)

export default app
