const express = require("express");
const cors = require("cors");
const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/todo', (err, db)=>{
    if(err) throw (err);
    //console.log(db);
    console.log("successfully connected to db");
});



const app = express();
app.use(cors())
app.use(express.json());

const todo = require('./routes/todo-routes');
app.use('/todo', todo);

const task = require('./routes/tasks-route');
app.use('/tasks', task);

const port = 3000;

app.get("/", (request, response) => {
    console.log("Base route hit!");
    response.json({ success: true, msg: "Base route hit!"});
});

app.listen(port, ()=>{
    console.log(`Server started on Port: ${port}`);
});

