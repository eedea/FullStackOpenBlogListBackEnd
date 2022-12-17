const http = require("http");
const express = require("express");
const app = express();
const blogsRouter = require("./controllers/blogs");

const cors = require("cors");
const mongoose = require("mongoose");

const logger = require("./utils/logger");
const config = require("./utils/config");

const mongoUrl = config.MONGODB_URI;
mongoose
  .set("strictQuery", false)
  .connect(mongoUrl)
  .then(() => {
    logger.info("Connected to MongoDB");
  });

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter);

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
