const Review = require('../../models/review')

module.exports = {
  showAll,
  createReview,
  updateReview,
  deleteReview,
  showOne,
};

async function showAll(req, res) {
  try{
    const data = await Review.find({item: req.params.id}).populate('user').exec()
    let sum = 0
    let count = 0
    let mean = 0
    data.forEach((one) => {
      sum = sum + one.rating
      count ++
    })
    if(count){
      mean = sum / count
    }
    res.status(200).json({mean: mean, count: count, reviews: data})
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function createReview(req, res) {
  try {
    req.body.item = req.params.id
    req.body.user = req.user
    let review = await Review.findOne({user: req.user, item: req.params.id})
    if(review){
      review.body = req.body.body
      review.rating = req.body.rating
    } else {
      review = new Review(req.body)
    }
    await review.save()
    res.status(200).json(review)
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function updateReview(req, res) {
  try{
    const review = await Review.findOneAndUpdate({user: req.user._id, item: req.params.id}, req.body, { new: true })
    res.status(200).json(review)
  } catch(error){
    res.status(400).json({ message: error.message})
  }
}
async function deleteReview(req, res) {
  try{
    const review = await Review.findOneAndDelete({user: req.user._id, item: req.params.id})
    res.status(200).json(review);
  }catch(error){
    res.status(400).json({message: error.message})
  } 
}
async function showOne(req, res) {
    try{
        const review = await Review.findOne({user: req.user._id, item: req.params.id})
        res.status(200).json(review)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}