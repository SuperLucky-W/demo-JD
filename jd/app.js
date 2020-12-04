let Koa = require('koa');
let router = require("koa-router")();
let render = require('koa-art-template');
let static = require('koa-static')
let index = require('./router/index')
let session = require('koa-session')
let bodyParser = require('koa-bodyparser')
let path = require('path')
const { extname } = require('path');
const app = new Koa();
app.use(bodyParser())
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'session',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  rolling: false,
  renew: false,
  secure: false,
  sameSite: null,
};
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  await next();
});
app.use(session(CONFIG, app));
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});
app.use(static('static'))
router.use('/', index.routes())
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001)