// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    insert:'INSERT INTO data_count(id, date, pv,buy,intention) VALUES(0,CURDATE(),?,?,?)',
    update:'update data_count set date=?, pv=? ,buy=?,intention=? where id=?',
    delete: 'delete from data_count where id=?',
    queryById: 'select * from data_count where id=?',
	queryByTime: 'select * from data_count where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(date)',
    queryAll: 'select * from data_count'
};

module.exports = user;