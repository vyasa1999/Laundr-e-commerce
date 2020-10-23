"use strict";

const config = require("../config/config.js")
const mongoose = require("mongoose");

/* Connect to your database using mongoose */
const connectToDatabase = () => {
  const link = config.db.uri;
  //see https://mongoosejs.com/docs/connections.html
  //See https://docs.atlas.mongodb.com/driver-connection/
  mongoose
    .connect(link, { useNewUrlParser: true, useUnifiedTopology: true})
    .catch((error) => console.error(error));
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
  return mongoose.connection;
};

module.exports = { connectToDatabase };
