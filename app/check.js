var mysql= require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database: 'test',
});
connection.connect(function(err){
  if (err) throw err;
  else console.log("Connection successful");
});

exports.insertAdv = function(req, res, next) {
  var details=req.body;
  connection.query('INSERT INTO advertisers SET ?',details, function (error, results){
    if (error) throw error;
    else res.send(JSON.stringify(results));
  });
}

exports.insertPub = function(req, res, next) {
    var details=req.body;
    connection.query('INSERT INTO publishers SET ?',details, function (error, results){
      if (error) throw error;
      else res.send(JSON.stringify(results));
    });
}

exports.loginAdv = function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  connection.query('SELECT * FROM advertisers WHERE username=?',username, function (error, results){
    if(res.length == 1){
      if(res.[0] == password){
        res.send(statusCode=200);
        console.log("Login successful");
      }
      else{console.log("password mismatch");}
    }
    else{console.log("Invalid username");}
  });
}

exports.loginPub = function(req, res, next) {
  var username=req.body.username;
  var password=req.body.password;
  connection.query('SELECT * FROM publishers WHERE username=?',username, function (error, results){
    if(res.length == 1){
      if(res.[0] == password){
        res.send(statusCode=200);
        console.log("Login successful");
      }
      else{console.log("password mismatch");}
    }
    else{console.log("Invalid username");}
  });
}
