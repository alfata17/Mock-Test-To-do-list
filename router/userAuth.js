const express = require('express');
const router = express.Router();
const controller = require('../app/controller');

//ambil auth dari jwt
const { auth } = require('../utils/jwt');

router.post('/api/userAuth/login', controller.auth.login)
router.post('/api/userAuth/register', controller.auth.register)
router.put('/api/userAuth/update/:id', controller.auth.update)
router.get('/api/userAuth/whoami', auth, controller.auth.whoami)

router.get('/whoami', controller.auth.whoami)

module.exports = router;

