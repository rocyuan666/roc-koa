const { asyncTasks } = require("roc-utils");
const db = require("../app/database");
const { apiError, apiSuccess } = require("../utils/apiBase");
const { md5 } = require("../utils/crypto-utils");
const redisClient = require("../app/redis");

class RegisterService {
  async register(nickname, username, password, uuid, captcha) {
    if (!uuid) {
      return apiError("uuid为空!");
    }
    const redisCaptcha = await redisClient.get(uuid);
    if (!nickname) {
      return apiError("昵称为空!");
    } else if (!username) {
      return apiError("用户名为空!");
    } else if (!password) {
      return apiError("密码为空！");
    } else if (!captcha) {
      return apiError("验证码为空！");
    } else if (captcha !== redisCaptcha) {
      return apiError("验证码错误！");
    }
    const selectSql = "SELECT * FROM roc_user WHERE username = ?";
    const [err1, results1] = await asyncTasks(db.query(selectSql, [username]));
    if (err1) return console.log("sql错误:", err1.sqlMessage);
    const users = results1[0];
    if (users.length) return apiError("用户名已存在");
    const addtime = new Date();
    const sqlInsert = "INSERT INTO roc_user(nickname, username, password, addtime) VALUES(?, ?, ?, ?)";
    const [err, results] = await asyncTasks(db.query(sqlInsert, [nickname, username, md5(password), addtime]));
    if (err) return console.log("sql错误:", err.sqlMessage);
    return apiSuccess(results[0].insertId);
  }
}

module.exports = new RegisterService();
