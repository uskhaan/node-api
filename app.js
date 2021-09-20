const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes
const postsRoute = require("./routes/posts");

// //add middleware
app.use("/posts", postsRoute);

//roites
app.get("/", (req, res) => {
  res.send("fuxkin home");
});

//connect to mongo server
mongoose.connect(process.env.DB_CONNECTION, { useNewParser: true }, () =>
  console.log("Connected")
);

// app.get("/", (req, res) => {
//   res.send("We are home!");
// });

// runMongoose();

// app.listen(3000);

// async function runMongoose() {
//   try {
//     await mongoose.connect(process.env.DB_CONNECTION, {
//       useNewUrlParser: true,
//     });
//     console.log("mongodb is OK");
//   } catch (error) {
//     console.log("mongodb Warning", error);
//   }
// }
//listen to server
app.listen(3000);
