const Data = require("../models/Data.model");

const processDataAsync = (payload) => {
  setImmediate(async () => {
    try {
      await Data.create(payload);
      console.log("Data saved:", payload);
    } catch (err) {
      console.error("DB save error:", err.message);
    }
  });
};

module.exports = processDataAsync;
