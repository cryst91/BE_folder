const { Classes } = require("../../models");
const service = async (req, res) => {
  try {
    const payload = req.body;
    const requestDB = await Classes.create(payload);
    return res.json({
      msg: "Class created successfully",
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

module.exports = { service };
