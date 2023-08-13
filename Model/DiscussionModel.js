const mongoose = require("mongoose");

const discussSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  Title: { type: String, required: true },
  discription: { type: String, required: false },
  Comments: [ {
    user_id:{ type: String, required: false },
    message:{ type: String, required: false },
    created_at:{ type: String, required: false },
    }],
  tags:[
    { type: String, required: false },
  ],
  otherdetails:[
    { type: String, required: false },
  ],
  created_at: { type: String, required: true },
  updated_at: { type: String, required: true },
});

const Discuss = mongoose.model("discuss", discussSchema);

module.exports = Discuss;