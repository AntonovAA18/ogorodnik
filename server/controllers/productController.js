const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/apiError')
const multer = require('multer')

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, description, categoryId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({
                name,
                price,
                description,
                typeId,
                categoryId,
                img: fileName
            })

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const products = await Product.findAll()
        return res.json(products)
    }
}

module.exports = new ProductController()