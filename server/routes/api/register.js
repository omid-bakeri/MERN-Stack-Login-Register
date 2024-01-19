const EmployeeModel = require("../../model/EmployeeModel");
const bcrypt = require("bcryptjs");

exports.postRegister = (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password);
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      EmployeeModel.create({ username, email, password: hash })
        .then((user) => res.json({ status: 200, message: "Success" }))
        .catch((err) =>
          res.json({ status: 503, message: "Internal Error Server" })
        );
    })
    .catch((err) => res.json(err));
};
