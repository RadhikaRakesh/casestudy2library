const mongoose=require("mongoose");
//mongoose.set("useUnifieldTopology",true);
mongoose.connect("mongodb://localhost:27017/library");
const Schema=mongoose.Schema;
const logSchema= new Schema({
    fname: String,
    address: String,
    gender: String,
    dob:String,
    mobile: String,
    username:String,
    email:String,
    password:String,
    user:String
});

var logdata=mongoose.model("logdata",logSchema);

module.exports=logdata;