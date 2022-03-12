const { Classes, Sessions } = require("../../models");

const service = async (req, res) => {
  try {
    const requestDB = await Classes.findAll({
      include: {
        attributes: ["id", "name"],
        model: Sessions,
      },
    });
    return res.json({
      msg: "Classes retrieved successfully",
      data: requestDB,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.toString(),
    });
  }
};

module.exports = { service };
