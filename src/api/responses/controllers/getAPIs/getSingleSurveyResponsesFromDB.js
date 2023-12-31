const Responses = require("../../../../schemas/Responses");

const getSingleSurveyResponsesFromDB = async (req, res) => {
  try {
    const _id = req.params._id;
    let query = { surveyID: _id };
    const result = await Responses.find(query);
    res.send(result);
  } catch (error) {
    res.send({ error: true, message: error.message });
  }
};

module.exports = getSingleSurveyResponsesFromDB;
