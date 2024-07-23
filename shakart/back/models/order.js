const mongoose=require('mongoose');

const orderSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    street:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    proname:{
        type:String,
        require:true
    },
    phoneno:{
        type:Number,
        require:true
    }


})
const Order=mongoose.model('order',orderSchema);
module.exports=Order;