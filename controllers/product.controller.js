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