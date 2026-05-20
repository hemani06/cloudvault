const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    let token;

    // Check authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No token
    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, "cloudvaultsecret");

    req.user = decoded;

    next();

  } catch (error) {
    console.log(error);

    res.status(401).json({
      message: "Not authorized, token failed",
    });
  }
};

module.exports = protect;