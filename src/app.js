
const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const loginRoute = require("../routes/index");
const path = require('path');
const bcrypt =require('bcrypt');
const mongoose = require("mongoose");
const User = require('../views/users');



app.set('port', process.env.PORT || 3000);
//app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './views'));
app.use('/', loginRoute);

const  mongo_uri = 'mongodb+srv://sagenav:wonderful1177@cluster0.u3t61.mongodb.net/usersbingo'
mongoose.connect(mongo_uri, function (err){
    if (err){
        throw err;
    }else {
        console.log(`Successfully connected to ${mongo_uri}`);
    }
})


app.post('/register',(req,res)=>{
    const {username,password}= req.body;
    const user = new User({username, password});

    user.save(err => {
        if (err){
            res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
        }else {
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
});
app.post('/authenticate',(req,res)=>{
    const {username, password}= req.body;

    User.findOne({username}, (err,user) =>{
        if (err){
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }else if (!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }else {
           user.isCorrectPassword(password,(err, result) =>{
               if (err){
                   res.status(500).send('ERROR AL AUTENTICAR');
               }else if (result){
                   res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
               }else {
                   res.status(500).send('UDUARIO Y/O CONTRASEÑA INCORRECTA');
               }
           });
        }
    });
});




app.listen(app.get('port'), ()=>{
//    console.log(`listen on port ${app.get('port')}`);
    console.log("escuchando en el puerto", app.get('port'));
});

