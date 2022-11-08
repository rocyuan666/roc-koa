const fs = require('fs');

const userService = require('../service/user.service');
const fileService = require('../service/file.service');
const { AVATAR_PATH } = require('../constants/file-path');


class UserController {

  async details(ctx, next) {
    const { userId } = ctx.params;
    const avatarInfo = await fileService.getDetailsByUserId(userId);

    // 2.提供图像信息
    ctx.response.set('content-type', avatarInfo.mimetype);
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
  }
}

module.exports = new UserController();
