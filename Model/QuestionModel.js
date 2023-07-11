const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  images: { type: String, required: true },
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
  created_at:{ type: String, required: true },
  updated_at:{ type: String, required: true },
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;