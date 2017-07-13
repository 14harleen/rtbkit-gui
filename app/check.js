var mysql= require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'admiin',
  password:'root',
  database: 'test',
});
connection.connect(function(err){
  if (err) throw err;
  else console.log("Connection successful");
});

exports.insertAdv = function(req, res, next) {

  var gDetails=req.body;

    connection.query('INSERT INTO applicants SET ?',gDetails, function (error, results){
    if (error) throw error;
    else res.send(JSON.stringify(results));
    });
  }
}
