const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const connect = require("./Config/db");
const Register = require("./model/register");

const port = process.env.PORT || 3000;

//modul Wraper Function
//By this html file connected to web browser
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", async (req, res, next) => {
  res.render("index");
});
app.get("/register", async (req, res, next) => {
  res.render("register");
});

//create a newuser in our database
app.post("/register", async (req, res, next) => {
  try {
    // console.log("sre", req.body);
    // console.log(req.body.firstname + " " + req.body.lastname);
    res.send(req.body.firstname + " " + req.body.lastname);

    //checkPassword

    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    if (password === confirmpassword) {
      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        gender: req.body.gender,
        city: req.body.city,
        state: req.body.state,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const registered = await registerEmployee.save();
      res.status(201).render(index);

      console.log(registered);
    } else {
      res.send("Password are not matching");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(port, async (req, res, next) => {
  await connect();
  console.log(`Connecting Server ${port}`);
});
