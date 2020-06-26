const sql = require("./db");

const UserModel = () => {};

UserModel.getUserByEmail = (email, callback) => {
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  sql.query(query, (err, res) => {
    if (err) callback(err, null);
    else callback(null, res);
  });
};

UserModel.insertUser = (userid, email, password, callback) => {
  const query = `INSERT INTO users (userid, email, password) values ('${userid}', '${email}', '${password}')`;
  sql.query(query, (err, res) => {
    if (err)
      callback(err, null);
    else callback(null, res);
  })

};

module.exports = UserModel;
