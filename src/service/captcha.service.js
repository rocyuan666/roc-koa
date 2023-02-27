const captchapng = require("captchapng");
const { createUUID, randomNum } = require("roc-utils");
const { apiSuccess } = require("../utils/apiBase");
const redisClient = require("../app/redis");

class CaptchaService {
  async getCaptcha() {
    const cap = randomNum(1000, 9999);
    const uuid = createUUID();
    await redisClient.set(uuid, cap, {
      EX: 60, // 过期时间60秒(1分钟)
      NX: true, // 键不存在时，对键进行设置
    });
    const p = new captchapng(100, 40, cap); // width, height, 数字验证码
    p.color(220, 220, 220, 255); // 背景颜色: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // 数字颜色: paint (red, green, blue, alpha)
    const imgbase64 = p.getBase64();
    return apiSuccess({
      uuid,
      captcha: `data:image/png;base64,${imgbase64}`,
    });
  }
}

module.exports = new CaptchaService();
