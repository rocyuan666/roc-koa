const uploadService = require("../service/upload.service");

class UploadController {
  async upload(ctx) {
    ctx.body = await uploadService.upload(ctx.file);
  }
}

module.exports = new UploadController();
