const mysql = require("mysql2");

const config = require("./config");

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});

connections.getConnection((err, conn) => {
  if (err) return console.log("mysql连接发生致命错误:", err);
  conn.connect((err) => {
    if (err) {
      console.log("mysql连接失败:", err);
    } else {
      console.log("mysql连接成功~");
    }
  });
});

module.exports = connections.promise();
