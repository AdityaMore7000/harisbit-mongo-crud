import Product from "../models/product.model.js"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {JSON} 
 */
export async function getAllProducts(req, res) {
        try {
            const products = await Product.find()
            res.status(200).json({products})
        } catch (error) {
            res.status(500).json({message:error})
        }
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {JSON} 
 */

export async function addAProduct(req,res){
    try {
        const product = await Product.create(req.body)
        res.status(200).json({product})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {JSON} 
 */
export async function getSingleProduct(req,res){
    try {
        const {id} = req.params
        const product = await Product.findById(id);
        res.status(200).json({product})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns {JSON} 
 */
export async function updateProduct(req,res){
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).json({message:"Product not found"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({updatedProduct})
    }
    catch (error) {
        res.status(500).json({message:error})
    }
}

export async function deleteProduct(req,res){
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({product,message:"Product deleted"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}