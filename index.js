const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello World from Koa";
});

exports.helloGET = app.callback();
