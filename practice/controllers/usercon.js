const createUser =  (req, res) => {
  console.log(req.body)
  return res.send ("response")
};

const updateduser = async (req, res) => {
  console.log(req.params.id)
  return res.send ("response delete user")
};

const deleteuser = async (req, res) => {
  console.log(req.params)
  return res.send ("response")
};

module.exports = {
  createUser,
  updateduser,
  deleteuser
};