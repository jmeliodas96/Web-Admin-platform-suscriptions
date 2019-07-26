// express for router
const express = require('express');
const router = express.Router();

// get login
router.get('/', (req,res) => {
    res.render('index')
})

// get about
router.get('/about', (req,res) => {
    res.render('about');
})

// get forget password
router.get('/restore', (req,res) => {
    res.send('Index');
})


// exporting
module.exports = router; 

