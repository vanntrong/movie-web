const movieController = require("../controllers/movie");

const router = require("express").Router();

router.get("/:id", movieController.renderDetailMovie);

router.get("/:id/watch", movieController.renderMovieFrame);
module.exports = router;
