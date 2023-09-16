const express = require('express')
const router = express.Router()
const departmentController = require('../../controllers/api/departments')

// Route for getting all departments with categories and items
router.get('/', departmentController.getDepartments)


module.exports = router
