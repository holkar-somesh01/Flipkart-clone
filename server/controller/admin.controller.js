const asyncHandler = require("express-async-handler")
const fs = require("fs")
const path = require("path")
const Product = require("../models/Product")
const Upload = require("../utils/Upload")
const cloudinary = require("../utils/cloudinary.config")

exports.getAllFeProducts = asyncHandler(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "Product Fetch Success", result })
})
exports.AddProdcut = asyncHandler(async (req, res) => {
    Upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "Multer Error" })
        }
        if (req.file) {
            const { secure_url } = await cloudinary.uploader.upload(req.file.path)
            await Product.create({ ...req.body, image: secure_url })
            console.log(req.file.filename)
            res.json({ message: "Product Add Success" })
        } else {
            return res.status(400).json({ message: "Thumb Image Is Requerd", err })
        }
    })
})
exports.updateProduct = asyncHandler(async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Products Update Success" })
})

exports.deleteProduct = asyncHandler(async (req, res) => {
    const result = await Product.findById(req.params.id)
    await cloudinary.uploader.destroy(result.image)
    fs.unlinkSync(path.join(__dirname, "..", "uploads", result.image))
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product Delete Success" })
})
