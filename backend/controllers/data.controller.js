 const processDataAsync = require("../utils/asyncProcessor");

exports.receiveData = async (req, res) => {
  processDataAsync(req.body);
  res.status(202).json({ message: "Data received and processing" });
};

export const getAllData = async (req, res) => {
  try {
    const data = await Data.find();

    return res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
