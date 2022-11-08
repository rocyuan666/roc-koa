const connection = require("../app/database");

class UserService {
  async getUserById(userId) {
    const statement = `SELECT * FROM sys_user WHERE user_id = ?;`;
    const result = await connection.execute(statement, [userId]);

    return result[0];
  }
}

module.exports = new UserService();
