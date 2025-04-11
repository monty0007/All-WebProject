const Products = require('../schema/productModel')

const productCtrl = {
    getProducts:async(req,res) => {
        try{
            const user = await Products.findById(req.user.id)

            if(!user) return res.status(400).json({msg:"User Not Found"})
            res.json(user)
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createProducts:async(req,res) => {
        try{
            const {name,email} = req.body;
            const newData= new Products({name,email})
            await newData.save()

            res.json({msg:"Data is Saved Successfully"})

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = productCtrl