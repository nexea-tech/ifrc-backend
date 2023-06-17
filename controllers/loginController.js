// @desc get page
// @route
// @access
const getLogin = (req, res) => {
  res.status(200);
  res.send({ status: "Login" });
};

module.exports = { getLogin };
