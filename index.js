import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import Product from './models/product.model.js'
const app = express()
const port = process.env.PORT || 5000
import ProductRouter from './routes/product.route.js'
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/products',ProductRouter)
app.get('/ping',(req,res)=>{
    res.send('pong')
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`Alive on http://localhost:${port}`)
    })
    console.log('Connected to database')
}).catch((err)=>{
    console.log(err)
})