var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
  if(!req.session.user){                     //到达/home路径首先判断是否已经登录
	req.session.error = '请先登录'
	res.redirect('/login');                //未登录则重定向到 /login 路径
  }
  console.log(req.session.user);
  res.render('index', { title: '杜恒' });
});

module.exports = router;
