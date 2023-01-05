const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const citizenRoute = require("./route/citizenRoutes");
const jpoRoutes = require("./route/jpoRoutes");
const volunteerRoutes = require("./route/volunteerRoutes");
const validationRoute = require("./route/validationRoute");
const vaccinationCenterRoute = require("./route/vaccinationCenterRoutes");
const pharmacyRoute = require("./route/pharmacyRoutes");
const vaccinationRoutes = require("./route/vaccinationRoutes");
const dashboardRoute = require("./route/dashboardRoute");

var cors = require("cors");
app.use(express.static(__dirname));

app.use(cors());
//mongoose.connect("mongodb+srv://admin:admin@cluster0.9tlzz.mongodb.net/Members?retryWrites=true&w=majority", {

/*
mongoose.connect("mongodb://localhost:27017/Evax", {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
//mongoose.connect("mongodb://localhost:27017/Evax", {


/*mongoose.connect("mongodb://localhost:27017/Evax", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
//mongoose.connect("mongodb://localhost:27017/Evax", {

/*mongoose.connect("mongodb://localhost:27017/testevax", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
mongoose.connect(
  "mongodb+srv://assil:assil@backevax.9homt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

);

/*
mongoose.connect("mongodb://localhost:27017/testevax", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Database Connection Established!");
});

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/citizen", citizenRoute);
app.use("/JPO", jpoRoutes);
app.use("/volunteer", volunteerRoutes);
app.use("/validation", validationRoute);
app.use("/vaccinationCenter", vaccinationCenterRoute);
app.use("/pharmacy", pharmacyRoute);
app.use("/vaccine", vaccinationRoutes);
app.use("/dashboard", dashboardRoute);

module.exports = app;
