const Router = require('express')
const User = require('../models/User')
const File = require('../models/File')
const config = require('config')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')

router.post('', authMiddleware, fileController.createDir)
router.get('', authMiddleware, fileController.fetchFiles)

module.exports = router