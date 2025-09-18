import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];
    console.log("token", token);
    if (!token) {
      return res.status(401).json({
        message: "Login First",
        error: true,
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
    console.log("decode", decode);
    if (!decode) {
      return res.status(401).json({
        message: "Unauthorize access",
        error: true,
        success: false,
      });
    }
    req.userId = decode.id;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "You do not have logged in", //error.message || error,
      error: true,
      success: false,
    });
  }
};

export default auth;
