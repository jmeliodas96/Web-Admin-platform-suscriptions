const express = require('express');
const router = express.Router();

// models
const User = require('../models/user');

// init session
router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

// bring form signup
router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

// register user
router.post('/users/signup', async (req, res) => {
    const {name, email, password, confirm_password } = req.body;
    
    const errors = [];
    if(name.length <= 0){
        errors.push({text:'Inserte nombre porfavor!'})
    }
    if(email.length <= 0){
        errors.push({text:'Inserte email porfavor!'})
    }
    if(password.length <= 0){
        errors.push({text:'Inserte password porfavor!'})
    }
    if(confirm_password.length <= 0){
        errors.push({text:'Confirme su password porfavor!'})
    }
    if(password != confirm_password){
        errors.push({text:'Contraseñas no coinciden!'});
    }
    if(password.length > 4){
        errors.push({text:'Contraseña debe ser menor que 4 caracteres!'})
    }

    if(errors.length > 0){
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        });
    } else {
        const emailUser = await User.findOne({email: email});
        if(!emailUser) {
            req.flash('error_msg', 'El email ya esta en uso!');
            res.redirect('/users/signup');

        }
        const newUser =  new User({name, email, password, confirm_password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Te has registrado exitosammente!');
        res.redirect('/users/signin');
    }

});

module.exports = router;