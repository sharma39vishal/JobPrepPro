const mongoose = require("mongoose");

const achiversSchema = new mongoose.Schema({
  images: { type: String, required: true },
  name:{ type: String, required: true },
  designation:{ type: String, required: true },
  discription: { type: String, required: false },
  Comments: [ {
    user_id:{ type: String, required: false },
    message:{ type: String, required: false },
    created_at:{ type: String, required: false },
    }],
  tags:[
    { type: String, required: false },
  ],
 connect:{ type: String, required: true },
  otherdetails:[
    { type: String, required: false },
  ],
  created_at: { type: String, required: true },
  updated_at: { type: String, required: true },
});

const Achivers = mongoose.model("achivers", achiversSchema);

module.exports = Achivers;