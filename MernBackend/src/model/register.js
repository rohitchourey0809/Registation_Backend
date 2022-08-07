const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  firstname: { type: "string", required: true },
  lastname: { type: "string", required: true },
  username: { type: "string", required: true },
  gender: { type: "string", required: true },
  password: { type: "string", required: true },
  city: { type: "string", required: true },
  state: { type: "string", required: true },
  password: { type: "string", required: true },
  confirmpassword: { type: "string", required: true },
});

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;
