
const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const loginRoute = require("../routes/index");
const path = require('path');
const bcrypt =require('bcrypt');
const mongoose = require("mongoose");
const User = require('../views/users');



app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './views'));
app.use(express.static(__dirname + './pubic'));
app.use('/', loginRoute);
/**
 * conexion a la base de datos alojada en mongo db atlas
 * @type {string}
 */
const  mongo_uri = 'mongodb+srv://sagenav:wonderful1177@cluster0.u3t61.mongodb.net/usersbingo'
mongoose.connect(mongo_uri, function (err){
    if (err){
        throw err;
    }else {
        console.log(`Successfully connected to mongodb+srv atlas`);
    }
})

/**
 * ruta en la cual podremos realizar el registro de los usuarios que tendra cada usuario
 */
app.post('/register',(req,res)=>{
    const {username,password}= req.body;
    const user = new User({username, password});

    console.log(username,password);

    user.save(err => {
        if (err){
            res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
        }else {
        /*    res.status(200).send('USUARIO REGISTRADO CON EXITO INGRESE A http://localhost:3000/  CON EL ' +
                'USUARIO REGISTRADO');*/

            res.redirect('/');
        }
    });
});
/**
 * ruta en la cual nos autenticaremos y nos redireccionara a la direccion del game donde podremos ver y crear laos cartones del bingo
 */
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
                   res.redirect('/game');
                   /*res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');*/
               }else {
                   res.status(500).send('UDUARIO Y/O CONTRASEÑA INCORRECTA');
               }
           });
        }
    });
});


/**
 * mensaje que saldra en al consola del ide diciendo que el server esta funcionando y que
 * corre por el puerto 3000
 */
app.listen(app.get('port'), ()=>{
//    console.log(`listen on port ${app.get('port')}`);
    console.log("escuchando en el puerto", app.get('port'));
});

