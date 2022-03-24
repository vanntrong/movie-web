const movieController = require("../controllers/movie");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("search");
});

router.post("/", movieController.getSearchResult);

module.exports = router;
