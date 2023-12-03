const express = require('express');
const router = express.Router();

//auth dari jwt
const { auth } = require('../utils/jwt')

const controller = require('../app/controller')

router.get('/api/users', controller.users.get)
router.get('/api/users/login', auth, controller.users.getById)
router.delete('/api/users/:id', controller.users.destroy)

module.exports = router;