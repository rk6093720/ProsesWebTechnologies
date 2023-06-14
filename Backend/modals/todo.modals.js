const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
      username:{type:String, unique:true, required:true},
      mobileNo: { type: String,  required: true, minlength: 10, maxlength: 10,},
      email: { type: String,required: true,match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, },
      address: {type: String,required:true },
      profilePic: { type: String, required:true },
      userId : {type : String, required : true}
  
})
const TodoModel = mongoose.model("todo",todoSchema)
module.exports = {
    TodoModel
}