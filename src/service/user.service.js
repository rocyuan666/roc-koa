const { asyncTasks } = require("roc-utils");
const db = require("../app/database");
const { apiSuccess, apiError } = require("../utils/apiBase");

class UserService {
  async getUserById(userId) {
    const sql = `SELECT id,username,nickname,headimg,addtime,edittime FROM roc_user WHERE id = ?;`;
    const [err, results] = await asyncTasks(db.query(sql, [userId]));
    if (err) return console.log("sql错误:", err.sqlMessage);
    const users = results[0];
    if (users.length) {
      return apiSuccess(users[0]);
    } else {
      return apiError("无此用户");
    }
  }
}

module.exports = new UserService();
