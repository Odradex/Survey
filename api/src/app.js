require('app-module-path').addPath(__dirname);

const Koa = require('koa');
const http = require('http');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const config = require('config');

const routes = require('routes');

const app = new Koa();

app.use(cors({ credentials: true }));
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }));

routes(app);

const server = http.createServer(app.callback());

server.listen(config.port, () => {
  console.log(`Api server listening on ${config.port}, in ${config.env} mode`);
});

module.exports = app;
