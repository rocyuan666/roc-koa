const Router = require("@koa/router");
const captchaController = require("../controller/captcha.controller");

const captchaRouter = new Router({ prefix: "/captcha" });

/**
 * @swagger
 * /captcha:
 *   get:
 *     summary: 获取验证码
 *     tags:
 *       - system
 *     responses:
 *       0:
 *         description: 成功
 */
captchaRouter.get("/", captchaController.getCaptcha.bind(captchaController));

module.exports = captchaRouter;
