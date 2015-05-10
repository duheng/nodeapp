var express = require('express');
var router = express.Router();
var datacountDao = require('../dao/datacountDao');//加载数据统计模块
var Q = require('q');
/* GET home page. */
router.get('/', function(req, res, next) {
//	 res.send('respond with a resource');

	var fun1 = function (data) {
	  var deferred = Q.defer();
	  setTimeout(function(){
		    deferred.resolve(data+" fun1");
	  },1000);
	  return deferred.promise;
	}

	var fun2 = function (data) {
	  var deferred = Q.defer();
	   setTimeout(function(){
		    deferred.resolve(data+" fun2");
	  },2000);
	 
	  return deferred.promise;
	}

	var fun3 = function (data) {
	  var deferred = Q.defer();
	  
	     setTimeout(function(){
		   deferred.resolve(data+" fun3");
	  },10000);
	  return deferred.promise;
	}
Q.all([
  fun1("test1"),fun2("test2"),fun3("test3")
  ]).spread(function(func1,func2,func3){
	  console.info(func1);
	    console.info(func2);
		  console.info(func3);
   // console.log(arguments);//获得的参数为('test1 fun1', 'test2 fun2', 'test3 fun3' )
  });
  res.render('chart', { title: '杜恒' });
});
// 插入集采图表数据
router.get('/datacCount/add', function(req, res, next) {
	console.log("datacCount")
    datacountDao.add(req, res, next);
});
// 读取集采图表数据
router.get('/datacCount/get', function(req, res, next) {
	console.log("datacCount")
    datacountDao.queryWeek(req, res, next);
});
module.exports = router;
