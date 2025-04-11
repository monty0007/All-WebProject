const Products=require('../models/productModel')
const { query } = require('express');

class APIfeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString; 
    }

    filtering(){
        const queryObj = {...this.queryString}
        const excludedFields = ['page','sort','limit']
        excludedFields.forEach(eL => delete(queryObj[eL]))

        let queryStr=JSON.stringify(queryObj)
        queryStr=queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$'+ match)

        this.query.find(JSON.parse(queryStr))

        return this
    }
    sorting(){
        if(this.queryString.sort){
            const sortBy= this.queryString.sort.split(',').join('')

            this.query= this.query.sort(sortBy)
            console.log(sortBy)
        }
        else{
            this.query=this.query.sort('-createdAt')
        }
        return this
    }
    pagination(){
        const page = this.queryString.page * 1 || 1;
        const limit=this.queryString.limit * 1 || 9;
        const skip = (page-1) * limit;

        this.query= this.query.skip(skip).limit(limit)

        return this
    }
}

const productCtrl={
    getProducts:async(req,res) => {
        try{
            // const products=await Products.find()
            console.log(req.query)
            const features=new APIfeatures(Products.find(),req.query).filtering().sorting().pagination()
            const products= await features.query
            res.json({status:'success',
            result: products.length,
        products:products})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createProducts:async(req,res) => {
        try{
            const {product_id, title, price,description,content,image,category}=req.body

            if(!image) return res.status(400).json({msg:"No Image Uploaded"})

            const product= await Products.findOne({product_id})

            if(product)
                return res.status(400).json({msg:"Product Already Exist"})

            const newProducts=new Products({
                product_id,title:title.toLowerCase(),price,description,content,image,category
            })

            await newProducts.save()

            res.json({msg:"Created a product"})
        }
        catch(err){
            return res.statu(500).json({msg:err.message})
        }
    },
    deleteProduct:async(req,res) => {
        try{
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a product succesfully"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateProduct:async(req,res) => {
        try{
            const {title, price,description,content,image,category}=req.body

            if(!image) return res.status(400).json({msg:"No Image Uploaded Meow"})
            
            await Products.findByIdAndUpdate({_id:req.params.id},{title:title.toLowerCase(),price,description,content,image,category})

            res.json({msg:"Updated a product succesfully"})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports= productCtrl