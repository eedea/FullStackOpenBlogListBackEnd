const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const notesRouter = require("./controllers/blogs");
const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

mongoose
  .set("strictQuery", false)
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/api/blogs", notesRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
