const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/library");
const Schema=mongoose.Schema;
const BookSchema= new Schema({
    title: String,
    author: String,
    genere: String,
    summary:String,
    image: String
});

var Bookdata=mongoose.model("bookdata",BookSchema);

module.exports=Bookdata;
