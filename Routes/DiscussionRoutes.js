const router = require("express").Router();
const Discussion = require("../Model/DiscussionModel");
const isauthenticated = require("../Middleware/isauthenticated")

//Root route
router.get("/",(req, res) => {
    try {
        Discussion.find()
        .then((discuss) => res.json(discuss))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

router.get("/:id",(req, res) => {
    Discussion.findById(req.params.id)
        .then((discuss) => res.json(discuss))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Route to add a new post
router.post("/adddiscussion",isauthenticated,(req, res) => {
    //Retrieve data for post
    const {images,user_id,Title,discription,tags} = req.body;
    //Create a new Post and save it to DB
    // console.log(req.body);
    const newDiscussion = new Discussion({images,user_id,Title,discription,Comments:[],otherdetails:[],tags,created_at:new Date(),updated_at:new Date()});
    // Save the new post
    newDiscussion.save()
        .then(() => res.json("Discussion Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;