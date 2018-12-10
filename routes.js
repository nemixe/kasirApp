const routes = require('next-routes')

module.exports = routes()
  .add({ name: 'index', page: 'index', pattern: '/index' })
  .add({ name: 'list', page: 'list', pattern: '/list' })
  .add({ name: 'login', page: 'login', pattern: '/login' })
  .add({ name: 'logout', page: 'logout', pattern: '/logout' })