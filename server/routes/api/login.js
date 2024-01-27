const EmployeeModel = require("../../model/EmployeeModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.postLogin = (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "jwt-secret-key",
            {
              expiresIn: "1d",
            }
          );
          res.cookie("token", token);
          return res.json({ status: 200, message: "successfully login!" });
        } else {
          return res.json({
            status: 404,
            message: "The Password is Incorrect",
          });
        }

        if (error) {
          return res.json({ message: "Error", status: 404 });
        }
      });
    } else {
      return res.json({ status: 404, message: "No record existed" });
    }
  });
};
