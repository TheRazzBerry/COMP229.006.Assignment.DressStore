// Define Model
let productModel = require('../models/productModel.js');

// Product Methods
module.exports.read = function (req, res) { res.json(req.product); }

module.exports.getAll = async function(req, res, next) {
    try {
        let list = await productModel.find({});
        res.status(200).json(list);
    } catch (error) { next(error); }
}

module.exports.getOne = async function(req, res, next) {
    try {
        let {id} = req.params
        let product = await productModel.findById(id);
        res.status(200).json(product);
        next();
    } catch (error) { next(error); }
}

module.exports.add = async function(req, res, next) {
    try {
        let product = await productModel.create(req.body);
        res.status(200).json(product);
    } catch (error) { next(error); }
}

module.exports.update = async function(req, res, next) {
    try {
        let {id} = req.params;
        let product = await productModel.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({ message: "Product was not updated!" });
        }
        let updatedProduct = await productModel.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) { next(error); }
}

module.exports.delete = async function(req, res, next) {
    try {
        let {id} = req.params;
        let product = await productModel.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({ message: "Product was not deleted!" });
        }
        res.status(200).json({ message: "Product with ID: " + id + "was be deleted." });
    } catch (error) { next(error); }
}