const express = require('express');
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
  secret: "mysupresecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOption));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  req.flash("suu");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.messages = req.flash("success");
  res.render("page.ejs", { name: req.session.name});
});

// app.use(cookieParser);

// app.get("/gatcookies", (req, res) => {
//   res.cookie("greet", "hello");
//   res.send("sent you some cookies!");
// });

// app("/", (req,res) => {
//     res.send("Hi, I am root!");
// });

// app.use("/users", users);
// app.use("/posts", posts);



app.listen(3000, () => {
  console.log("Server is running on 3000");
});