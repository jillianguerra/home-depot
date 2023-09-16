const Category = require('../../models/category')
const Department = require('../../models/department')
const Item = require('../../models/item')

module.exports = {
    getAllCategories,
    getCategoriesByDepartment
}


// Get all categories and the associated deparment, display featured categories and items on the home page
async function getAllCategories(req, res) {
    try {
        const categories = await Category.find().populate('department')
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Get categories based on the selected department for the category list page
async function getCategoriesByDepartment (req, res) {
    try {
        // Find the department based on the department ID
        const department = await Department.findOne({ name: depName })

        if (!department) {
            return res.status(404).json({ error: 'Department not found' })
        }

        // Find all categories that belong to the specified department
        const categories = await Category.find({ department: department._id })

        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}