const db = require("../../models");

module.exports = async function() {
  return await db.Heat.bulkCreate()
}