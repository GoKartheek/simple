const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default // using i18next middleware
// const nextI18NextMiddleware = require('./middlewares/next-i18next-middleware').default // using our own middleware

const nextI18next = require('./i18n')
// const rewriter = require('express-urlrewrite')

const port = process.env.PORT || 3001
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => handle(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
