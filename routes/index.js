var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* ALL Monitoring URLs. */
router.all('*', indexController.main);

module.exports = router;
