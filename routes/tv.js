const movieController = require("../controllers/movie");
const apiCallers = require("../utils");

const router = require("express").Router();

router.get("/:id", movieController.renderTvDetail);

router.get("/:id/watch", async (req, res) => {
  const detailData = await apiCallers.getDetailData("tv", req.params.id);
  res.render("watch-tv", {
    detailData,
    imageSmallURL: process.env.IMAGE_SMALL_URL,
  });
});

router.get("/:id/episode", async (req, res) => {
  const detailData = await apiCallers.getDetailData("tv", req.params.id);
  res.render("watch-tv-frame", {
    detailData,
    id: req.params.id,
    season: req.query.season,
    episode: req.query.episode,
    getTvApi: process.env.GET_TV_API,
  });
});

module.exports = router;
