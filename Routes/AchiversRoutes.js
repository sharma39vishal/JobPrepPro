const router = require("express").Router();
const Achivers = require("../Model/AchiversModel");
const isauthenticated = require("../Middleware/isauthenticated");
const Recordlog = require("../Controller/logs");

//Root route
router.get("/",(req, res) => {
    try {
        Achivers.find()
        .then((achiver) => res.json(achiver))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

router.get("/:id",(req, res) => {
    Achivers.findById(req.params.id)
        .then((achiver) => res.json(achiver))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Route to add a new post
// router.post("/addachivers",(req, res) => {
//     //Retrieve data for post
//     const {images,name,designation,discription,connect} = req.body;
//     //Create a new Post and save it to DB
//     // console.log(req.body);
//     const newAchivers = new Achivers({images,name,designation,discription,Comments:[],otherdetails:[],connect,tags:[],created_at:new Date(),updated_at:new Date()});
//     // Save the new post
//     Recordlog({user_id:"Admin",ip:req.ip,what:"New Achivers Added"})
//     newAchivers.save()
//         .then(() => res.json("Achivers Added!"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });


module.exports = router;