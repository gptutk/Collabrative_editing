const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

//invoke config to load into process.env
dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION SUCCESSFUL");
  })
  .catch((err) => {
    console.log("not connected to database 😿", err, "/n/n");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
