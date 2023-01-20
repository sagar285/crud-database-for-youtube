const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crud").then(()=>{
    console.log("connectoion succesfull");
}).catch((e)=>{
    console.log(e);
})

const schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    sirname:{
        type:String
    }

})

const Userdetail = mongoose.model("User",schema);
module.exports =Userdetail