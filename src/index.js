let express = require('express');
let bodyParser = require('body-parser');
//create a server object:
let app = express();

//the server object listens on port 8080
var port = process.env.PORT || 8080;
// enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
// Send message for default URL
app.get('/', (req, res) => res.send('Try POST and then GET to /api/'));
// for parsing application/json
app.use(bodyParser.json());
// Import routes
let apiRoutes = require('./api-routes');
// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function() {
  console.log('Running server on port ' + port);
});
