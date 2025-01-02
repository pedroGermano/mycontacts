const { Router } = require('express')

const ContactController = require('./app/controllers/ContactControlller')

const router = Router()

router.get('/contacts', ContactController.index)

module.exports = router;
