// express for router
const express = require('express');
const router = express.Router();

// get login
router.get('/', (req,res) => {
    res.send('Index');
})

// get about
router.get('/', (req,res) => {
    res.send('Index');
})

// get forget password
router.get('/', (req,res) => {
    res.send('Index');
})


// exporting
module.exports = router; 

