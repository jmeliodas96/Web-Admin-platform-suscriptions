// express for router
const express = require('express');
const router = express.Router();

// models
const Order = require('../models/order');
// auth
const { isAuthenticated } = require('../helpers/auth');

// get login
router.get('/', (req,res) => {
    res.render('index')
    // res.render('users/signin');
})

// get about
router.get('/about', (req,res) => {
    res.render('about');
})

// get forget password
router.get('/restore', (req,res) => {
    res.send('Index');
})

// offers
router.get('/suscribe', (req, res) => {
    res.render('offers');
});

// modules
router.get('/modules', isAuthenticated, (req, res) => {
    res.render('module');
});

// adding offer
router.post('/suscribe/add', async (req, res) => {
    const { quantity, description } = req.body;
    const errors = [];
    if(quantity.length <= 0){
        errors.push({text:'Inserte una cantidad porfavor.!'});
    }
    if(description.length <= 0 ) {
        errors.push({text:'Inserte una descripción porfavor.!'});
    }
    
    if(errors.length > 0){
        res.render('offers', {
            errors,
            quantity,
            description
        });
    } else {
        const newOrder = new Order({quantity, description});
        await newOrder.save();
        req.flash('sucessfull', 'Pedido agregado, registrate y te contacteremos pronto!');
        res.redirect('/users/signup');
    }
});


// exporting
module.exports = router; 

