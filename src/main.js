const app = require("./app");
require("./app/database");

const { APP_NAME, APP_HOST, APP_PORT, SWAGGER_OPEN } = require("./app/config");

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME}在${APP_PORT}端口启动成功~`);
  if (SWAGGER_OPEN == "true") {
    console.log(`swagger接口文档地址：${APP_HOST}:${APP_PORT}/swagger`);
  }
});
