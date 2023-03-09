const path = require("path");
const router = require("@koa/router")(); //引入路由函数
const swaggerJSDoc = require("swagger-jsdoc");
const { APP_NAME, APP_HOST, APP_PORT } = require("./config");

const swaggerDefinition = {
  info: {
    title: APP_NAME,
    version: "1.0",
    description: `${APP_NAME} 接口文档 \n contentType: 'application/x-www-form-urlencoded;charset=UTF-8'`,
    contact: {
      name: "rocyuan",
      url: "http://rocyuan.top",
      email: "rocyuan666@163.com",
    },
  },
  host: `${APP_HOST}:${APP_PORT}`,
  basePath: "/", // Base path 如 /api ...
};
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "../", "router", "*.router.js")], // 写有jsdoc的router的存放地址
};
const swaggerSpec = swaggerJSDoc(options);
// 通过路由获取生成的注解文件
router.get("/swagger.json", async function (ctx) {
  ctx.set("Content-Type", "application/json");
  ctx.body = swaggerSpec;
});
module.exports = router;
