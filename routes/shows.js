const express = require('express'); 
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res)=>{
res.render('partials/show-list', {
    db: db
});

})

module.exports= router; 