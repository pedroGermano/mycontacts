const { Router } = require('express')

const ContactController = require('./app/controllers/ContactControlller')

const router = Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)

module.exports = router;
