const Item = require('../../models/item')
const SubItem = require('../../models/subItem')

module.exports = {
  index,
  showByCategory,
  show,
  search,
  createOne,
  deleteOne,
  updateOne
};

async function index(req, res) {
  try{
    const data = await Item.find({}).sort('name').populate('category subItem').exec()
    res.status(200).json({items: data})
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function showByCategory(req, res) {
  try{
    const data = await Item.find({category: req.params.id}).populate('subItem').exec()
    res.status(200).json(data)
  } catch(error){
    res.status(400).json({ message: error.message})
  }
}
async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id).populate('type type2').exec()
    res.status(200).json(item);
  }catch(error){
    res.status(400).json({message: error.message})
  } 
}
async function search(req, res){
    try{
        const items = await Item.find({searchTerm: req.params.term})
        res.status(200).json({items: items})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
async function createOne(req, res){
    try{
        const item = new Item(req.body)
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
async function deleteOne(req, res){
    try{
        const item = Item.findByIdAndDelete(req.params.id)
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
async function updateOne(req, res){
    try{
        const item = Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}