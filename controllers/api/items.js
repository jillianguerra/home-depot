const Item = require('../../models/item')
const Review = require('../../models/review')
const Category = require('../../models/category')

module.exports = {
  index,
  showByCategory,
  showFeaturedItems,
  show,
  search
}

// get featured items
async function showFeaturedItems(req, res) {
  const data = await Item.find({ featured: true }).sort('name').populate({
    path: 'category',
    populate: {
        path: 'department'
    }
}).exec()
  res.status(200).json({ items: data })
}
async function index(req, res) {
  try {
    const data = await Item.find({}).sort('name').populate({
      path: 'category',
      populate: {
          path: 'department'
      }
  }).exec()
    res.status(200).json({ items: data })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function showByCategory(req, res) {
  try {
    const cat = await Category.findOne({name: req.params.catName})
    const data = await Item.find({ category: cat._id }).populate({
      path: 'category',
      populate: {
          path: 'department'
      }
  }).exec()
    const formattedData = data.map((item) => {
      Review.find({ item: item._id }).exec().then((reviews) => {
        let sum = 0
        let count = 0
        let mean = 0
        reviews.forEach((one) => {
          sum = sum + one.rating
          count++
        })
        if (count) {
          mean = sum / count
        }
        return {...item, rating: mean}
      })
    })
    res.status(200).json(formattedData)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id).populate({
      path: 'category',
      populate: {
          path: 'department'
      }
  }).exec()
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function search(req, res) {
  try {
    const items = await Item.find({ searchTerms: req.params.term }).populate({
      path: 'category',
      populate: {
          path: 'department'
      }
  }).exec()
    res.status(200).json({ items: items })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}