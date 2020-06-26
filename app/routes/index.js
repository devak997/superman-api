const userController = require("../controllers/users");

const routeHandler = (app) => {
  app.route("/users/authenticate").post(userController.authenticateUser);
  app.route("/users/add").post(userController.addUser);
};

module.exports = routeHandler;
