const path = require("path");

// 日志根目录
const baseLogPath = path.resolve(__dirname, "../../logs");

// 错误日志目录
const errorPath = "/error";
// 错误日志文件名
const errorFileName = "error";
// 错误日志输出完整路径
const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;

// 请求日志目录
const reqPath = "/request";
// 请求日志文件名
const reqFileName = "request";
// 请求日志输出完整路径
const reqLogPath = baseLogPath + reqPath + "/" + reqFileName;

// 响应日志目录
const responsePath = "/response";
// 响应日志文件名
const responseFileName = "response";
// 响应日志输出完整路径
const responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

module.exports = {
  // 日志格式等设置
  appenders: {
    console: {
      type: "console",
    },
    errorLogger: {
      type: "dateFile",
      filename: errorLogPath,
      pattern: "yyyy-MM-dd_hh-mm-ss.log",
      alwaysIncludePattern: true,
      encoding: "utf-8",
      maxLogSize: 1000,
      numBackups: 3,
      path: errorPath,
      layout: {
        type: "basic",
      },
    },
    http: {
      type: "dateFile",
      filename: reqLogPath,
      pattern: "yyyy-MM-dd_hh-mm-ss.log",
      alwaysIncludePattern: true,
      encoding: "utf-8",
      maxLogSize: 1000,
      numBackups: 3,
      path: reqPath,
      layout: {
        type: "basic", // 'messagePassThrough'
      },
    },
    resLogger: {
      type: "dateFile",
      filename: responseLogPath,
      pattern: "yyyy-MM-dd_hh-mm-ss.log",
      alwaysIncludePattern: true,
      encoding: "utf-8",
      maxLogSize: 1000,
      numBackups: 3,
      path: responsePath,
      layout: {
        type: "basic",
      },
    },
  },
  // 供外部调用的名称和对应设置定义
  categories: {
    default: {
      appenders: ["console"],
      level: "all",
    },
    resLogger: {
      appenders: ["resLogger"],
      level: "info",
    },
    errorLogger: {
      appenders: ["errorLogger"],
      level: "error",
    },
    http: {
      appenders: ["http"],
      level: "info",
    },
  },
  baseLogPath,
  replaceConsole: true,
};
