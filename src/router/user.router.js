const Router = require("@koa/router");
const { findById } = require("../controller/user.controller");
const { tokenAuth } = require("../middleware/auto.middleware");

const userRouter = new Router({ prefix: "/user" });

userRouter.get("/:userId", tokenAuth, findById);

module.exports = userRouter;
