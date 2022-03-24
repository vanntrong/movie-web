const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dotenv = require("dotenv");
const movieRoute = require("./routes/movie");
const tvRoute = require("./routes/tv");
const searchRoute = require("./routes/search");
const movieController = require("./controllers/movie");

dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/", movieController.renderHomeScreen);

app.use("/movie", movieRoute);
app.use("/tv", tvRoute);
app.use("/search", searchRoute);
// listen server
app.listen(PORT, () => {
  console.log(`Server is listening port ${PORT}`);
});
