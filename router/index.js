const express = require('express');
const router = express.Router();

const auth = require('./userAuth');
const users = require('./users');
const data = require('./data');


router.use(auth);
router.use(users);
router.use(data);


// router.use()

module.exports = router;