const path = require("path");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const useRoutes = require("../router");
const { cors } = require("../middleware/cors.middleware");
const { log4jsToCtx, logger } = require("../middleware/logger.middleware");

const app = new Koa();

app.use(log4jsToCtx);
app.use(logger);
app.use(cors);
app.use(serve(path.join(__dirname, "..", "..", "./public")));
app.useRoutes = useRoutes;
app.use(bodyParser());
app.useRoutes();
app.on("error", (err) => {
  console.log(err);
});

module.exports = app;