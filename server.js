const { join } = require('path')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => {
    const parsedURL = parse(req.url, true)
    const { pathname } = parsedURL
    if (pathname === '/service-worker.js') {
      const staticPath = join(__dirname, '.next', pathname)
      return app.serveStatic(req, res, staticPath)
    } else {
      return handle(req, res, parsedURL)
    }
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Running on port ${port}`)
  })
})