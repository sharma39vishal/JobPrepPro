const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const isauthenticated = require("./Middleware/isauthenticated")

const http = require('http').Server(app);
const io = require('socket.io')(http
    ,{cors:{"origin":[
      "http://localhost:3000",
      "https://jobpreppro.netlify.app",
    ],
    credentials: true,
  }}
  );
  
  io.on('connection', (socket) => {
    // console.log('User connected');
    socket.on('message', (data) => {
      socket.join(data.room);
      // console.log(`User joined room ${data.room}`);
    });
  
    // console.log(socket.id)
    socket.on('message', (data) => {
      io.to(data.room).emit('message', data);
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
  
  // setInterval(()=>{console.log(io.engine.clientsCount, io.of("/").sockets.size);
  // },2000)
  
  // const path=require("path");
  
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
app.use("/profile",require("./Routes/UserProfile"));
app.use("/logs",isauthenticated,require("./Routes/LogsRouter"));

// app.listen(PORT, err => {
//   if (err) throw err;
//   console.log(`Server started on port: ${PORT}`);
// });

http.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
