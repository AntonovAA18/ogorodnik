const {Category} = require("../models/models");

class CategoryController {
   async create(req, res) {
        const {name, typeId} = req.body
        const type = await Category.create({
            name,
            typeId
        })
        res.json(type)
    }
   async getAll(req, res) {
       const categories = await Category.findAll()
       return res.json(categories)
     }
     delete(req, res) {

     }
}

module.exports = new CategoryController()