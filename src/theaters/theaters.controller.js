const theaterServices = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//middleware

//route handlers
async function list(req, res) {
  const data = await theaterServices.list();

  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
