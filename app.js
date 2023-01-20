const express = require("express");
const { findByIdAndDelete } = require("./connection");
const Userdetail = require("./connection");
const app = express();
app.use(express.json());
const port = 3000;
// post request data send to database

app.post("/post",async(req,res)=>{
    try {
        
        const data = new Userdetail(req.body)
        const savedata = await data.save();
        res.status(201).send(savedata);

    } catch (error) {
        res.status(400).send(e);
        
    }
})


 // get full data from database
app.get("/get",async(req,res)=>{
    try {
         const getdata = await Userdetail.find({});
         console.log(getdata);
        res.status(201).send(getdata);

    } catch (error) {
        res.status(400).send(e);
        
    }
})

// single data get from database
app.get("/get/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
         const getdata = await Userdetail.find({_id});
         console.log(getdata);
        res.status(201).send(getdata);

    } catch (error) {
        res.status(400).send(e);
        
    }
})

app.patch("/update/:id",async(req,res)=>{
    try {
        const _id= req.params.id;
         const getdata = await Userdetail.findByIdAndUpdate(_id,req.body,{new:true});
         console.log(getdata);
        res.status(201).send(getdata);

    } catch (error) {
        res.status(400).send(e);
        
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try {
  const deletedata = await Userdetail.findByIdAndDelete(req.params.id);
  res.send(deletedata);
    } catch (error) {
        res.status(400).send(error);
        
    }
})

app.listen(port,()=>{
    console.log(`server runing on port no ${port}`);
})