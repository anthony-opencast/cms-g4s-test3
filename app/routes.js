const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const g4s3 = require('./routes/g4s3');;

router.use(g4s3);

module.exports = router
