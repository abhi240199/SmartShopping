const express= require("express");
const PORT=8000;
const app=express();

app.get('/',(req,res)=>{
    return res.send("Welcome to Smart Shopping")
})


app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in creating server");
    }
    console.log(`SmartShopping Server is running on port ${PORT}`)
})
