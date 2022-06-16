//create task
//delete task
//mark task as completed
//get all tasks
const Tasks = require("./tasks");
const express = require("express");
const tasks = require("./tasks");

const router = express.Router();
router.use(express.json());


router.get('/', async(req, res) => {
    try{
       const allTasks = await Tasks.find({});
       res.json(allTasks);
      }
    catch(err){
      console.log(err);
    }
    
    //res.json(tasks);
})

router.post('/', async(req, res) => {
    //let name = req.body.name;
    const task = req.body;
    console.log("Todo post route", req.body);
    try{
      const newTask = await Tasks.create(task);
      res.json(newTask);
    }
    catch(err){
      console.log(err);
    }
    

})

router.put('/:id', async(req, res) =>{
  const id = req.params.id
  console.log("id", id);
  try{
    const task = await Tasks.findById({_id:id});
    console.log("Task", task)
    task.reminder = !task.reminder;
    task.save();
    res.json({msg: "Success"})
  }
  catch(err){
    console.log(err);
  }
  
}

)

router.delete('/:id', async(req, res) => {
  //let name = req.body.name;
  const id = req.params.id;
  try{
    await Tasks.deleteOne({_id: id});
    res.json({delete: "Deleted"})
  }
  catch(err){
    console.log(err)
  };
  console.log("Todo post route", req.body);
  

})

module.exports = router;