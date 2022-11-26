const db = require("../app/database");
const { apiSuccess, apiError } = require("../utils/apiBase");

class UserService {
  async getUserById(userId) {
    const sql = `SELECT id,username,nickname,headimg,addtime,edittime FROM roc_user WHERE id = ?;`;
    const [result] = await db.execute(sql, [userId]);
    if (result.length) {
      return apiSuccess(result[0]);
    } else {
      return apiError("无此用户");
    }
  }
}

module.exports = new UserService();
