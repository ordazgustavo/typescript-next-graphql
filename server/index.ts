import { createServer } from 'http'
import * as next from 'next'

import { routes } from './routes'

const port = Number(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handle).listen(port, (err: any) => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
