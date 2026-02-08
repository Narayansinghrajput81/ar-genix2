const rateLimitMap = new Map();

const RATE_LIMIT = 100;
const WINDOW_TIME = 60 * 1000;

module.exports = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  const data = rateLimitMap.get(ip);

  if (currentTime - data.startTime > WINDOW_TIME) {
    rateLimitMap.set(ip, { count: 1, startTime: currentTime });
    return next();
  }

  if (data.count >= RATE_LIMIT) {
    return res.status(429).json({ message: "Too many requests" });
  }

  data.count++;
  next();
};
