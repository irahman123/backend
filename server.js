var express=require("express");

var bodyParser=require('body-parser');

var app = express();

var authenticateController=require('./controlers/authenticate-controller');
var registerController=require('./controlers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

app.listen(8012);