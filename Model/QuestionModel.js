const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  Title: { type: String, required: true },
  difficulty: { type: String, required: true },
  discription: { type: String, required: false },
  input1:{ type: String, required: false },
  output1:{ type: String, required: false },
  input2:{ type: String, required: false },
  output2:{ type: String, required: false },
  constraints:{ type: String, required: false },
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