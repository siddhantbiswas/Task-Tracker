//create task
//delete task
//mark task as completed
//get all tasks

const express = require("express");

const router = express.Router();
router.use(express.json());


router.get('/', (req, res) => {
    console.log("Todo get route", req.body);
    res.json({success: true, msg: "Todo get route"});
})

router.post('/', (req, res) => {
    let name = req.body.name;
    console.log("Todo post route", req.body);
    res.json({success: true, msg: "Yo"})

})

router.delete('/', (req, res) => {
    console.log("Todo Delete Route");
    let obj = {
        id: req.body._id,
    };

    console.log(obj);
    res.json({ success:true, msg: "Task Deleted"})
});

module.exports = router;