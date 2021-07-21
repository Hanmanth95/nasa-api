var request = require("request");
exports.getAstronomyImage = function (req, res) {
  console.log("getAstronomyImage called");
  console.log(req.query);
  var url =
    "https://api.nasa.gov/planetary/apod?api_key=" + process.env.NASA_API;
  if (req.query && req.query.date) {
    url = url + "&start_date=" + req.query.date;
  }
  console.log("url:: " + url);
  request.get({ url: url, json: true }, function (err, response, body) {
    console.log("getAstronomyImage response");
    console.log(body);
    if (err) {
      return res.send(err);
    }
    var imgObj = [];
    if (body && body.code) {
      return res.send(body);
    } else if (body && body.length > 0) {
      imgObj.push(body[0]);
      return res.send(imgObj);
    } else {
      imgObj.push(body);
      return res.send(imgObj);
    }
    return res.send(body);
  });
};
