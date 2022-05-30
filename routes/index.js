const express = require("express");
const login = express.Router();

/**
 * rutas en las cuales podresmos hacer el registro, login y inicio del juego
 * '/' ruta inicial donde nos podremos logear al juego
 * '/register' ruta en la cuela podremos realizar el registro de nuevos usuarios para el game
 * '/game' ruta en la cual podremos visualizar el bingo y crear las tablas del bingo
 */
login.get('/',(req, res) => {
    res.render('login');
});

login.get('/register',(req, res) => {
    res.render('register');
});

login.get('/game',(req, res) =>{
    res.render('game');
});


module.exports = login;
