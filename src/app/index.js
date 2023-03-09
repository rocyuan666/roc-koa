const path = require("path");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const useRoutes = require("../router");
const { cors } = require("../middleware/cors.middleware");
const { log4jsToCtx, logger } = require("../middleware/logger.middleware");
const { HTTP_OR_HTTPS, SSL_KEY, SSL_CERT, SWAGGER_OPEN } = require("./config");

const app = new Koa();

if (SWAGGER_OPEN == "true") {
  // swagger 接口文档配置
  const swagger = require("./swagger");
  const { koaSwagger } = require("koa2-swagger-ui");
  app.use(swagger.routes(), swagger.allowedMethods());
  app.use(
    koaSwagger({
      routePrefix: "/swagger", // 接口文档访问地址
      swaggerOptions: {
        url: "/swagger.json", // swagger-jsdoc生成的json文档地址
      },
    })
  );
}

// 开启https
let https, options;
if (HTTP_OR_HTTPS == "https") {
  const sslify = require("koa-sslify").default;
  https = require("https");
  options = {
    key: SSL_KEY,
    cert: SSL_CERT,
  };
  app.use(sslify());
}

app.use(log4jsToCtx);
app.use(logger);
app.use(cors);
app.use(serve(path.join(__dirname, "..", "..", "./public")));
app.useRoutes = useRoutes;
app.use(bodyParser());
app.useRoutes();
app.on("error", (err) => {
  console.log("应用错误:", err);
});

if (HTTP_OR_HTTPS == "https") module.exports = https.createServer(options, app.callback());
else module.exports = app;
