const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/library");
const Schema=mongoose.Schema;
const authorSchema= new Schema({

    author: String,
    language:String,
    
    genere: String,
    works:String,
    image: String
});

var authordata=mongoose.model("authordata",authorSchema);

module.exports=authordata;