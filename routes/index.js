const express = require('express');

const router = express.Router();

const ApplicationController = require('../controllers/ApplicationController');

router.get('/get', ApplicationController.getstore);
router.post('/add', ApplicationController.store);

module.exports = router;
