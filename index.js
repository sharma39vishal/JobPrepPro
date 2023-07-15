const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const isauthenticated = require("./Middleware/isauthenticated")

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

// connect to mongoDB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MDB_CONNECT) 
.then(()=>{console.log('Mongodb connected')});

// set up routes
app.use("/auth", require("./Routes/Authentication"));
app.use("/discuss", require("./Routes/DiscussionRoutes"));
app.use("/questions", require("./Routes/QuestionRoutes"));
app.use("/achiver", require("./Routes/AchiversRoutes"));
app.use("/profile",isauthenticated,require("./Routes/UserProfile"));
app.use("/logs",isauthenticated,require("./Routes/LogsRouter"));

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server started on port: ${PORT}`);
});


// const next = require('next')
// const dev = process.env.NODE_ENV !== 'production';
// const nextapp = next({ dev, dir: './client' });
// const handle = nextapp.getRequestHandler();
// const path=require("path");

// app.use(express.static(path.join(__dirname, 'client')));
// Handle Next.js page requests
// app.get('/_next/*', (req, res) => {
//   return handle(req, res);
// });

// nextapp.prepare()
//   .then(() => {
//     app.get('*', (req, res) => {
//       return handle(req, res);
//     });
    // app.listen(PORT, err => {
    //   if (err) throw err;
    //   console.log(`Server started on port: ${PORT}`);
    // });
  // })
  // .catch(err => {
  //   console.error('Error preparing application', err);
  // });
