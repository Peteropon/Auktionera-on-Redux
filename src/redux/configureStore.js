if (process.env.REACT_APP_STAGE === "prod") {
  module.exports = require("./configureStore.prod");
} else module.exports = require("./configureStore.dev");
