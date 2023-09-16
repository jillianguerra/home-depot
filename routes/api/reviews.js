const express = require('express')
const router = express.Router()
const reviewCtrl = require('../../controllers/api/reviews')

router.post('/:id', reviewCtrl.createReview)
router.delete('/:id', reviewCtrl.deleteReview)
router.put('/:id', reviewCtrl.updateReview)
router.get('/:id', reviewCtrl.showAll)

module.exports = router