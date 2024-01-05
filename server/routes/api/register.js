const EmployeeModel = require("../../model/EmployeeModel");
exports.postRegister = (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => console.error(err));
};
