const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://rohitchourey0809:rohit$12345@cluster0.2j4drqb.mongodb.net/RegistrationBackendForm?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database Connection Successful");
    })
    .catch((err) => {
      console.log("No connection");
    });
};

module.exports = connect;
