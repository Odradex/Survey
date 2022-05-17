const Router = require('@koa/router');

const router = new Router();

require('./create').register(router);
require('./getById').register(router);

module.exports = router.routes();
