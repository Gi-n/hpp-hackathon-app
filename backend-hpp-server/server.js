const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const responseTime = require("response-time");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");
const Routes = require("./routes/index");
const connectDB = require("./config/db");
dotenv.config();

connectDB();

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(helmet());
app.use(responseTime());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 15,
  windowMs: 1 * 60 * 1000,
  message:
    "Too many requests from this IP, please try again after sometime 😅!",
});

app.use("/api", limiter);

// Routers
// app.get("/api/health", (req, res) => {
//   res.status(200).json({ message: "API is healthy!" });
// });

app.use(Routes);

app.listen(port, () => console.log(`Server is running on port ${port} 💣.`));

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});
