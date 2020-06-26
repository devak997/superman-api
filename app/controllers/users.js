const sha256 = require("sha256");
const userModel = require("../models/user");
const UserModel = require("../models/user");

const UserController = () => {};

UserController.authenticateUser = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = sha256(password);
  userModel.getUserByEmail(email, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }

    if (result.length === 0) {
      res.statusCode = 404;
      res.send({ authenticated: false, message: "User doesn't exist!" });
      return;
    }

    if (result[0].password === hashedPassword) {
      res.send({ authenticated: true, id: result[0].userid });
    } else {
      res.statusCode = 401;
      res.send({ authenticated: false, message: "Wrong Password!" });
    }
  });
};

UserController.addUser = (req, res) => {
  const { userid, email, password } = req.body;
  const hashedPassword = sha256(password);
  userModel.insertUser(userid, email, hashedPassword, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send({ status: true });
  });
};

module.exports = UserController;
