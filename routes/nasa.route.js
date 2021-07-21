var router = require("express").Router();
var controller = require("../controllers/nasa.controller");

router.route("/fetch/astronomy").get(controller.getAstronomyImage);

module.exports = router;
