import express from 'express'
const router = express.Router();
import Product from '../models/product.model.js';
import { addAProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/product.controller.js';

router.route('/')
.get(getAllProducts)
.post(addAProduct)

router.route('/:id')
.get(getSingleProduct)
.put(updateProduct)
.delete(deleteProduct)

export default router;