module.exports = {
  apiSuccess(data) {
    return {
      code: 0,
      data: data,
      message: "成功",
    };
  },
  apiError(message = "失败", code = 1) {
    return {
      code: code,
      data: "",
      message: message,
    };
  },
};
