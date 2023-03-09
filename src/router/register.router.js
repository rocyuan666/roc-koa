const Router = require("@koa/router");
const { register } = require("../controller/register.controller");

const registerRouter = new Router({ prefix: "/register" });

/**
 * @swagger
 * /register:
 *   post:
 *     summary: 注册
 *     tags:
 *       - system
 *     parameters:
 *       - name: nickname
 *         type: string
 *         in: body
 *         required: true
 *         description: 昵称
 *       - name: username
 *         type: string
 *         in: body
 *         required: true
 *         description: 用户名
 *       - name: password
 *         type: string
 *         in: body
 *         required: true
 *         description: 密码
 *       - name: uuid
 *         type: string
 *         in: body
 *         required: true
 *         description: uuid
 *       - name: captcha
 *         type: string
 *         in: body
 *         required: true
 *         description: 验证码
 *     responses:
 *       0:
 *         description: 成功
 */
registerRouter.post("/", register);

module.exports = registerRouter;
