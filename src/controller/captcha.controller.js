const captchaService = require("../service/captcha.service");

class CaptchaController {
  async getCaptcha(ctx) {
    ctx.body = await captchaService.getCaptcha();
  }
}

module.exports = new CaptchaController();
