const userService = require("../service/user.service");
const { apiSuccess } = require("../utils/apiBase");

class UserController {
  async findById(ctx, next) {
    const { userId } = ctx.params;
    const result = await userService.getUserById(userId);
    ctx.body = apiSuccess(result);
  }
}

module.exports = new UserController();
