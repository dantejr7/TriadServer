// create model
const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("_Mongodb Atlas Connected");
}).catch(()=>{
    console.log("Mdb Atlas Not Connected");
})