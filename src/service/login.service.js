const { asyncTasks } = require("roc-utils");
const jwt = require("jsonwebtoken");
const db = require("../app/database");
const { apiSuccess, apiError } = require("../utils/apiBase");
const { md5 } = require("../utils/crypto-utils");
const { PRIVATE_KEY } = require("../app/config");
const redisClient = require("../app/redis");

class LoginService {
  async login(username, password, uuid, captcha) {
    if (!uuid) {
      return apiError("uuid为空!");
    }
    const redisCaptcha = await redisClient.get(uuid);
    if (!username) {
      return apiError("用户名为空!");
    } else if (!password) {
      return apiError("密码为空!");
    } else if (!captcha) {
      return apiError("验证码为空!");
    } else if (redisCaptcha !== captcha) {
      return apiError("验证码错误!", -1);
    }
    const sql = "SELECT * FROM roc_user WHERE username = ?";
    const [err, results] = await asyncTasks(db.query(sql, [username]));
    if (err) return console.log("sql错误:", err.sqlMessage);
    const users = results[0];
    if (users.length == 0) {
      return apiError("无此用户");
    } else if (md5(password) != users[0].password) {
      return apiError("密码错误");
    } else {
      /*
        sign(数据体, 私钥, 选项{algorithm: 算法, expiresIn: 到期时间})
        返回token
      */
      const token = jwt.sign(
        {
          id: users[0].id,
          username: users[0].username,
        },
        PRIVATE_KEY,
        {
          algorithm: "RS256",
          expiresIn: 60 * 60 * 24,
        }
      );
      return apiSuccess({ token });
    }
  }
}
module.exports = new LoginService();
