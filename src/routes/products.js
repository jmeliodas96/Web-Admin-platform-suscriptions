const express = require('express');
const router = express.Router();

// models is like a class(schema)
const Product = require('../models/product');

// retrieve all products > async function
router.get('/products', async (req, res) => {
    // find all into collections products
    const products =  await Product.find().sort({date: 'desc'});
    // render and pass object
    res.render('products/all-products', { products });
});

// form for add product
router.get('/products/add', (req, res) => {
    res.render('products/new-product');
});

// form for edit
router.get('/products/edit/:id', async (req, res) => {
    // find data for edit by id
    const product = await Product.findById(req.params.id);
    res.render('products/edit-product', { product });
})


// create a new product > async function
router.post('/products/new-product', async (req, res) => {
    const { name, description, startdate, enddate } = req.body;
    // validate errors
    const errors = [];
    if(!name){
        errors.push({text:'Inserte nombre'});
    }
    if(!description){
        errors.push({text:'Inserte descripción'});
    }
    if(!startdate){
        errors.push({text:'Inserte fecha de ingreso'});
    }
    if(!enddate){
        errors.push({text:'Inserte fecha de expiración'});
    }

    // if there is errors
    if(errors.length > 0){
        res.render('products/new-product', {
            errors,
            name,
            description,
            startdate,
            enddate
        });
    } else {
        // inserting
        const newProduct = new Product({name, description, startdate, enddate});
        // make this and follow with the next instruction
        await newProduct.save();
        // load all products   
        res.redirect('/products');
    }
});


module.exports = router;