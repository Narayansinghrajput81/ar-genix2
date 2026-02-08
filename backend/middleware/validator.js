module.exports = (req, res, next) => {
  const { deviceId, value } = req.body;

  if (!deviceId || typeof deviceId !== "string") {
    return res.status(400).json({ message: "Invalid deviceId" });
  }

  if (typeof value !== "number") {
    return res.status(400).json({ message: "Invalid value" });
  }

  next();
};
