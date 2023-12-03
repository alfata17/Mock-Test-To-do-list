const express = require('express');
const router = express.Router();
const controller = require('../app/controller')

const { auth } = require('../utils/jwt');

router.get('/api/data', controller.data.get)
router.get('/api/data/:id', controller.data.getById)
router.put('/api/data/:id', auth, controller.data.update)
router.post('/api/data', auth, controller.data.create)
router.delete('/api/data/:id', auth, controller.data.destroy)

module.exports = router;