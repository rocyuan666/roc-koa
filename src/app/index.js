const path = require("path");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const useRoutes = require("../router");
const { cors } = require("../middleware/cors.middleware");
const { log4jsToCtx, logger } = require("../middleware/logger.middleware");
const { HTTPORHTTPS, SSL_KEY, SSL_CERT } = require("./config");

const app = new Koa();

// 开启https
let https, options;
if (HTTPORHTTPS == "https") {
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

if (HTTPORHTTPS == "https") module.exports = https.createServer(options, app.callback());
else module.exports = app;
