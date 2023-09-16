const express = require('express')
const router = express.Router()
const categoryController = require('../../controllers/api/categories')

// Route for getting all categories
router.get('/', categoryController.getAllCategories)

// Route for getting categories by department
router.get('/:depName', categoryController.getCategoriesByDepartment)

 module.exports = router
