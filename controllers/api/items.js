const Item = require('../../models/item')
const Review = require('../../models/review')

module.exports = {
  index,
  showByCategory,
  showFeaturedItems,
  show,
  search,
  createOne,
  deleteOne,
  updateOne
}

// get featured items
async function showFeaturedItems(req, res) {
  const data = await Item.find({ featured: true }).sort('name').populate('category').exec()
  res.status(200).json({ items: data })
}
async function index(req, res) {
  try {
    const data = await Item.find({}).sort('name').populate('category').exec()
    res.status(200).json({ items: data })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function showByCategory(req, res) {
  try {
    const data = await Item.find({ category: req.params.id }).populate('category').exec()
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
    const term = toLowerCase(req.params.term)
    const items = await Item.find({ searchTerm: term }).populate('category').exec()
    res.status(200).json({ items: items })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function createOne(req, res) {
  try {
    const item = new Item(req.body)
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function deleteOne(req, res) {
  try {
    const item = Item.findByIdAndDelete(req.params.id)
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
async function updateOne(req, res) {
  try {
    const item = Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}