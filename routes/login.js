var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("login***********duheng------hahahaha---------++---")
		  console.log("*******************>"+req.session)
	res.render('login', { title: '用户登录' });
});
router.post('/', function(req, res, next) {
	  var user={
        username: 'admin',
        password: '123456'
	  }

	  if(req.body.username == user.username && req.body.password == user.password){
		req.session.user = 1;
		res.send({status:"success",msg:"登录成功！"});
	  }else{
		req.session.error = '登录失败！';
		res.send({status:"error",msg:"登录失败！"});
		
	  }
		
	/*
	
	if (req.body.data) {
        //能正确解析 json 格式的post参数
        res.send({"status": "success", "msg":"登录成功！"});
    } else {
        //不能正确解析json 格式的post参数
        var body = '', jsonStr;
        req.on('data', function (chunk) {
            body += chunk; //读取参数流转化为字符串
        });
        req.on('end', function () {
            //读取参数流结束后将转化的body字符串解析成 JSON 格式
            try {
                jsonStr = JSON.parse(body);
            } catch (err) {
                jsonStr = null;
            }
            jsonStr ? res.send({"status":"success", "name": jsonStr.data.name, "url": jsonStr.data.url}) : res.send({"status":"error"});
        });
    }
	
	*/
});
module.exports = router;
