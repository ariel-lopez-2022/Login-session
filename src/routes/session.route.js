const {Router} = require('express')
const sessionControler= require('../controller/session.controler')
const router = Router()


router.post('/register', sessionControler.registerLogin)

module.exports = router;