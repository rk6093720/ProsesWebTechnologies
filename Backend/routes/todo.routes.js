const { Router } = require("express");
const { postTodo, getTodo, todoput, tododelete} = require("../controller/todo.controller");
require("dotenv").config();

const router = Router();
// router.get("/", (req,res)=>{
//     res.send("get")
// })

//post api register
router.post("/create", postTodo)


router.get("/all", getTodo)
//get

//update
router.put("/put/:id", todoput);
//delete
router.delete("/delete/:id", tododelete)
module.exports=  router
