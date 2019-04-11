const theExpress = require('express');
const theApp = theExpress();
const thePort = theApp.listen(12345);
// for parsing form data
// will need to install this: https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
theApp.use(urlencodedParser);
// templating
theApp.set('view engine', 'ejs');
// static files in viewer
theApp.use(theExpress.static('viewer'));
///
// create a globl empty array



theApp.get('/', function(req, res){
  res.render('template.ejs');
});


var allTheTasks = [];

theApp.post('/sendTask', function(req, res) {
  var theTask;
 // Because it's a POST we use req.body to get the data
   console.log(req.body.task);
  // res.send("They submitted: " + req.body.first + " " + req.body.last);
  // now we're gonna create a JSON (!!)

  // Create an object using JSON
 var data = {
    task: req.body.task
  };

  allTheTasks.push(data);
  theTask = new Object();
 // put data into a the global array.
  theTask.allTheTasks = allTheTasks;
  console.log(theTask);
  // package array into an object to pass into template
  res.render('template.ejs', theTask);
  // splice previsous user data from the array
 // allTheTasks.splice(0, allTheData.length);

});
// access the local port + serve the site at that url
theApp.listen(thePort, function() {
  console.log('Example app listening on port 12345!')
});
