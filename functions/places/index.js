const { mocks } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;

  response.send(mocks[location]);
};