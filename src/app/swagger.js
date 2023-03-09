const path = require("path");
const router = require("@koa/router")(); //引入路由函数
const swaggerJSDoc = require("swagger-jsdoc");
const { APP_NAME } = require("./config");

const swaggerDefinition = {
  info: {
    title: APP_NAME,
    version: "1.0",
    description: `${APP_NAME} 接口文档`,
    contact: {
      name: "rocyuan",
      url: "http://rocyuan.top",
      email: "rocyuan666@163.com",
    },
  },
  basePath: "/", // Base path 如 /api ...
  consumes: ["application/x-www-form-urlencoded"],
  enableSecurity: true,
  securityDefinitions: {
    // 配置接口安全授权方式。
    apikey: {
      type: "apiKey",
      name: "token",
      in: "header",
    },
    // oauth2: {
    //   type: 'oauth2',
    //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
    //   flow: 'password',
    //   scopes: {
    //     'write:access_token': 'write access_token',
    //     'read:access_token': 'read access_token',
    //   },
    // },
  },
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
