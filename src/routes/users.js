const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users/signin')
})

router.get('/users/signup', (req, res) => {
    res.render('users/signup')
})

// register user
router.post('/users/signup', (req, res) => {
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
        errors.push({text:'Contraseña debe menor que 4 caracteres!'})
    }

    if(errors.length > 0){
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        });
    }

    console.log(req.body);
    res.send('Ok')
});

module.exports = router;