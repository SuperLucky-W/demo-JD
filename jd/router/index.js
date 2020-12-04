let Koa = require('koa');
let router = require('koa-router')();
let path = require('path');
let fs = require('fs')
const app = new Koa();
// 权限认证
router.use(async (ctx, next) => {
  ctx.state._host_ = `http://${ctx.host}`;
  ctx.state._name_ = ctx.session.name;
  if (ctx.session.userinfo) {
    await next();
  } else {
    if (ctx.url == '/' || ctx.url == '/zhuce' || ctx.url == '/doRegister' || ctx.url == '/doLogin') {
      await next();
    } else {
      ctx.redirect('/');
    }
  }
})

router.get('/', ctx => {
  ctx.render('login')
})
router.get('shouye',ctx=>{
  ctx.render('shouye')
})
router.get('zhuce', ctx => {
  ctx.render('zhuce')
})
router.get('finance',ctx=>{
  ctx.render('finance')
})
router.get('BrandFlashSales', ctx => {
  ctx.render('BrandFlashSales')
})
router.get('coupon', ctx => {
  ctx.render('coupon')
})
router.get('Fresh', ctx => {
  ctx.render('Fresh')
})
router.get('Secondskill', ctx => {
  ctx.render('Secondskill')
})
router.get('shop_cart', ctx => {
  ctx.render('shop_cart')
})
router.post('doRegister' , async ctx => {
  var username = ctx.request.body.username;
  var password = ctx.request.body.password;
  ctx.session.username = username;
  ctx.session.passowrd = password;
  ctx.session.name =  ctx.request.body.name;
  ctx.redirect('/')
})
router.post('doLogin', async ctx => {
  var username = ctx.request.body.username;
  var password = ctx.request.body.password;
  if (username == ctx.session.username && password == ctx.session.passowrd) {
    ctx.session.userinfo = ctx.request.body;
    // ctx.body = {
    //   code : 0
    // }
    ctx.redirect('/shouye')
  } else {
    // ctx.body = {
    //   code : 1
    // }
     ctx.redirect('/')
  }
})
module.exports = router;