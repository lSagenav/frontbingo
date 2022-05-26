
const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const loginRoute = require("../routes/index");
const path = require('path');

app.set('port', process.env.PORT || 3000);
//app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '../views'));
app.use('/', loginRoute);






app.listen(app.get('port'), ()=>{
//    console.log(`listen on port ${app.get('port')}`);
    console.log("escuchando en el puerto", app.get('port'));
});

