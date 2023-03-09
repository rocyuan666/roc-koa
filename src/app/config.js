/* eslint-disable no-undef */
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

/*
  !!! 重要 !!!
  请更换：
  RS256 公私钥
  SSL密钥证书（如需https）
*/
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/private.key"));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));
const SSL_KEY = fs.readFileSync(path.resolve(__dirname, "./ssl/ssl.key"));
const SSL_CERT = fs.readFileSync(path.resolve(__dirname, "./ssl/ssl.pem"));

const DES_KEY = "yuanpeng";

module.exports = { APP_NAME, APP_HOST, APP_PORT, HTTP_OR_HTTPS, APP_UPLOAD_BASEURL, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, REDIS_HOST, REDIS_PORT, SWAGGER_OPEN } = process.env;
module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;
module.exports.SSL_KEY = SSL_KEY;
module.exports.SSL_CERT = SSL_CERT;
module.exports.DES_KEY = DES_KEY;
