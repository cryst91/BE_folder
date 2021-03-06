const {
  Classes,
  Sequelize: { Op },
} = require("../../models");
const service = async (req, res) => {
  try {
    //   select all
    let where = {};
    //   select by id
    if (req.params.id) {
      where.id = req.params.id;
    }

    // pagination
    // query ?page=1&limit=10
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;

    const requestDB = await Classes.findAll({
      //   attributes: ["name", "description"],
      //   attributes: {
      //     exclude: ["createdAt", "updatedAt", "id"],
      //   },
      where: where,
      //   pagination
      limit,
      offset: (page - 1) * limit,
      //   order
      order: [["createdAt", "ASC"]],
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
