const express = require("express");
const app = express();
const cors = require("cors");
const { initializeConnection } = require("./database/databaseConnection");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;
initializeConnection();

app.get("/", (req, res) => {
  res.send("Hello from Ad compaign backend");
});

app.use("/campaign", require("./routes/campaignRouter"));

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening to port 8080`);
});
