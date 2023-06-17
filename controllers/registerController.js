// @desc
// @route
// @access
const getRegister = (req, res) => {
  res.status(200);
  res.json({ page: "Register" });
};

module.exports = { getRegister };
