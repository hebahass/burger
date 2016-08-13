var connection = require('./connection.js');

var orm = {
	selectAll: function(tableName, callback){
		var getAll = 'SELECT * FROM '+ tableName;
		connection.query(getAll, function(err, result){
			if (err) throw err;
			callback(result);
		});
	},

	insertOne: function(newBurger){
		var newOne = 'INSERT INTO burgers (burger_name) VALUES ?', newBurger;
		connection.query(newOne, function(err,result){
			if (err) throw err;
			console.log(result);
		});

	},

	updateOne: function(changeData, id){
		var update = 'UPDATE '+ changeData + 'SET devoured=1 WHERE id='+ id;
		connection.query(update, function(err, result){
			if (err) {
				throw err
			}
			console.log(result);
		});
	}
}



module.exports=orm;
