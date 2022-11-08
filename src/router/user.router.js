const Router = require("koa-router");
const { findById } = require("../controller/user.controller");

const userRouter = new Router({ prefix: "/users" });

userRouter.get("/:userId", findById);

module.exports = userRouter;
