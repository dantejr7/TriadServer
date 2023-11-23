const { admins,products,users } = require("../models/collection");



const adminlogin = (req, res) => {
    const { uname, psw } = req.body;

    admins.findOne({ uname,psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login success",
                statusCode: 200,
                status: true
            });
        } else {
            res.status(404).json({
                message: "Login failed",
                statusCode: 404,
                status: false
            });
        }
    });
};

const addProduct=(req,res)=>{
    const {pname,pagea,pageb,pagec,rating}=req.body
    const newProduct=new products({
        pname,pagea,pageb,pagec,rating
    })
    newProduct.save()
        res.status(200).json({
            message:"new product added",
            statusCode:200,
            status:true
        })

}

const getProducts=(req,res)=>{
    products.find().then(data=>{
        if(data){
            res.status(200).json({
                message:data,
                statusCode:200,
                status:true
            })
        }
    })
}

const editProduct=(req,res)=>{
    const {id}=req.params
    const {pname,pagea,pageb,pagec,rating}=req.body
    products.findOne({_id:id}).then(pdata=>{
        if(pdata){
            pdata.pname=pname
            pdata.pagea=pagea
            pdata.pageb=pageb
            pdata.pagec=pagec
            pdata.rating=rating

            pdata.save()
            res.status(200).json({
                message:"product updated",
                statusCode:200,
                status:true
            })
        }
    })
}

const deleteProduct=(req,res)=>{
    const {id}=req.params
    products.deleteOne({_id:id}).then(data=>{
        if(data){
            res.status(200).json({
                message:"product deleted",
                statusCode:200,
                status:true
            })
        }
    })
}

const getSingleProduct=(req,res)=>{
    const {id}=req.params
    products.findOne({_id:id}).then(data=>{
        if(data){
            res.status(200).json({
                message:data,
                statusCode:200,
                status:true
            })
        }
        else{
            res.status(404).json({
                message: "no data",
                statusCode: 404,
                status: false
            });
        }
    })
}

const userSignUp=(req,res)=>{
    const {email,psw,uname,propic}=req.body
    users.findOne({email}).then(user=>{
        if(user){
            res.status(404).json({
                message: "already existing user",
                statusCode: 404,
                status: false 
            })
        }
        else{
            newUser=new users({
                email,uname,propic,psw
            })
            newUser.save()
            res.status(200).json({
                message: "registered",
                statusCode: 200,
                status: true
            }) 
        }
    })
}

//user login
const userlogin = (req, res) => {
    const { email, psw } = req.body;

    users.findOne({ email,psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login success",
                statusCode: 200,
                status: true,
                _id:user._id
            });
        } else {
            res.status(404).json({
                message: "Login failed",
                statusCode: 404,
                status:false
            });
        }
    });
};

const getUsers=(req,res)=>{
    users.find().then(data=>{
        if(data){
            res.status(200).json({
                message:data,
                statusCode:200,
                status:true
            })
        }
    })
}

const deleteUser=(req,res)=>{
    const {id}=req.params
    users.deleteOne({_id:id}).then(data=>{
        if(data){
            res.status(200).json({
                message:"user deleted",
                statusCode:200,
                status:true
            })
        }
    })
}


module.exports={adminlogin,addProduct,getProducts,editProduct,deleteProduct,getSingleProduct,userSignUp,userlogin,getUsers,deleteUser}