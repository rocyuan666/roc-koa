const Router = require("@koa/router");
const uploadController = require("../controller/upload.controller");
const { uploadMiddleware } = require("../middleware/upload.middleware");
const { tokenAuth } = require("../middleware/auto.middleware");

const uploadRouter = new Router({ prefix: "/upload" });

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: 文件上传
 *     tags:
 *       - upload
 *     consumes:
 *       - form-data
 *     parameters:
 *       - name: file
 *         type: file
 *         in: body
 *         required: true
 *         description: 文件
 *     responses:
 *       0:
 *         description: 成功
 */
uploadRouter.post("/", tokenAuth, uploadMiddleware, uploadController.upload.bind(uploadController));

module.exports = uploadRouter;
