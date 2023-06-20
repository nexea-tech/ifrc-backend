const user = {
  name: "Afiq",
  role: "admin",
};

// @desc get
// @route
// @access
const getLogin = (req, res) => {
  // if (user.role !== "admin") {
  //   res.status(404);
  //   res.json({ error: "You do not have access" });
  //   return;
  // }
  res.status(200);
  res.send({ status: "Login" });
};

// // @desc
// // @route
// // @access
// const getLogin = (req, res) => {
//   res.status(200);
//   res.send({ status: "Login" });
// };

module.exports = { getLogin };
