const userService = require("../service/user.service");

class UserController {
  async findById(ctx) {
    const { userId } = ctx.params;
    ctx.body = await userService.getUserById(userId);
  }
}

module.exports = new UserController();
