const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const  todoRoutes  = require("./routes/todo.routes");

require("dotenv").config();
const port_no = process.env.PORT || 8000;
const app = express();
// app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("welcome to our Todo App")
})

app.use("/todo", todoRoutes)
app.listen(port_no, async()=>{
    try {
        await connection;
        console.log("DATABASE CONNECTION IS SUCCESSFULLY");

    } catch (err) {
        console.log("error name",err.message);
    }
    console.log("Port",port_no)
})