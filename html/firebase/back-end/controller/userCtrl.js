const Users=require('../schema/userModel')

   const getUser=async(req,res)=>{
        try{
            const {name,email,image}= req.body
            const newData=new Users({name,email,image})

            await newData.save()

        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }

module.exports = getUser