const Router = require("@koa/router");
const loginController = require("../controller/login.controller");

const loginRouter = new Router({ prefix: "/login" });
/**
 * @swagger
 * /login:
 *   post:
 *     summary: 登录
 *     tags:
 *       - system
 *     parameters:
 *       - name: username
 *         type: string
 *         in: body
 *         required: true
 *         description: 用户名
 *       - name: password
 *         in: body
 *         required: true
 *         description: 密码
 *         type: string
 *       - name: uuid
 *         in: body
 *         required: true
 *         description: uuid
 *         type: string
 *       - name: captcha
 *         in: body
 *         required: true
 *         description: 验证码
 *         type: string
 *     responses:
 *       0:
 *         description: 成功，返回token
 */
loginRouter.post("/", loginController.login.bind(loginController));

module.exports = loginRouter;
