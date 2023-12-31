const Users = require("../../../schemas/Users");

const getUserDataFromDB = async (req, res) => {
  try {
    // if (req.user.email !== req.query.email) {
    //   return res.status(403).send({ message: "Forbidden Access" });
    // }
    // const servicesCollection = database.collection("postedJobs");
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
    }
    const result = await Users.find(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getUserDataFromDB;
