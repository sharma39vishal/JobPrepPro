const router = require("express").Router();
const Question = require("../Model/QuestionModel");
const isauthenticated = require("../Middleware/isauthenticated");
const Recordlog = require("../Controller/logs");
//Root route
router.get("/",(req, res) => {
    try {
        Question.find()
        .then((discuss) => res.json(discuss))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        res.status(400).json("Error: " + err)
    }
});

router.get("/:id",(req, res) => {
    Question.findById(req.params.id)
        .then((discuss) => res.json(discuss))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Route to add a new post
router.post("/addquestion",(req, res) => {
    //Retrieve data for post
    const {user_id,Title,difficulty,discription,input1,output1,input2,output2,constraints,tags} = req.body;
    //Create a new Post and save it to DB
    // console.log(req.body);
    const newQuestion = new Question({user_id,Title,difficulty,discription,input1,output1,input2,output2,constraints,Comments:[],otherdetails:[],tags,created_at:new Date(),updated_at:new Date()});
    // Save the new post
    Recordlog({user_id,ip:req.ip,what:"New Question Added"})
    newQuestion.save()
        .then(() => res.json("Question Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;