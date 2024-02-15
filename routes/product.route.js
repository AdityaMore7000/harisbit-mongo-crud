import express from 'express'
const router = express.Router();
import Product from '../models/product.model.js';
import { addAProduct, getAllProducts, getSingleProduct } from '../controllers/product.controller.js';

router.route('/')
.get(getAllProducts)
.post(addAProduct)

router.route('/:id')
.get(getSingleProduct)
.put(async(req,res)=>{
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
})
.delete(async (req,res)=>{
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
})

export default router;