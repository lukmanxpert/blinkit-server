import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDb from "./config/connectDb.js";
import userRouter from "./routes/user.route.js";
import categoryRouter from "./routes/category.route.js";

dotenv.config();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
const port = process.env.PORT || 9000;

// APIS

app.get("/", (req, res) => {
  res.json({
    message: "Server is running at port " + port,
  });
});

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);

app.listen(port, async () => {
  console.log("Server is running at port", port);
  await connectDb();
});
