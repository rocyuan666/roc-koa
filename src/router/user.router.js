const Router = require('koa-router');
const {
  details
} = require('../controller/user.controller');

const userRouter = new Router({prefix: '/users'});

userRouter.get('/:userId', details);

module.exports = userRouter;
