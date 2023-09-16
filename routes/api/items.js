const express = require('express')
const router = express.Router()
const itemCtrl = require('../../controllers/api/items')

router.get('/', itemCtrl.index)
router.get(`/featured`, itemCtrl.showFeaturedItems)
router.get('/category/:catName', itemCtrl.showByCategory)
router.get('/search/:term', itemCtrl.search)
router.get('/:id', itemCtrl.show)
module.exports = router