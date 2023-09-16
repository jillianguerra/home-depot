const Department = require('../../models/department')

module.exports = {
    getDepartments
}

async function getDepartments (req, res) {
    try {
        const departments = await Department.find({})
        res.status(200).json(departments)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

