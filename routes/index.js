const express = require("express");
const login = express.Router();


login.get('/',(req, res) => {
    res.render('login');
});

login.get('/register',(req, res) => {
    res.render('register');
});


module.exports = login;
