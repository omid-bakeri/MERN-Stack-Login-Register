const EmployeeModel = require("../../model/EmployeeModel");
const bcrypt = require("bcryptjs");

exports.postRegister = (req, res) => {
  const { username, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      EmployeeModel.create({ username, email, password: hash })
        .then((user) => res.json({ status: "SUCCESS" }))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
};
