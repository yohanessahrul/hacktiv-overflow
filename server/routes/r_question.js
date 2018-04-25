const controllerQuestion = require('../controllers/c_question')
const router = require('express').Router()

router.get('/list', controllerQuestion.list)
router.post('/create', controllerQuestion.create)

module.exports = router