const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('Products from database')
})

module.exports = router;