const Router = require("@koa/router");
const userController = require("../controller/user.controller");
const { tokenAuth } = require("../middleware/auto.middleware");

const userRouter = new Router({ prefix: "/user" });

/**
 * @swagger
 * /user/info:
 *   get:
 *     summary: 查询当前用户信息
 *     tags:
 *       - user
 *     responses:
 *       0:
 *         description: 成功
 */
userRouter.get("/info", tokenAuth, userController.findById.bind(userController));

module.exports = userRouter;
