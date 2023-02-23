const userService = require("../service/user.service");

class UserController {
  async findById(ctx) {
    const { id } = ctx.user;
    ctx.body = await userService.getUserById(id);
  }
}

module.exports = new UserController();
