// Requires
const createError = require("http-errors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const userLoggedMiddleware = require("./src/middlewares/auth/userLoggedMiddleware");

// Routers
const indexRouter = require("./src/routes/index.routes");
const productsRouter = require("./src/routes/products.routes");
const usersRouter = require("./src/routes/users.routes");
const productsApiRouter = require("./src/routes/Api/productsApi.routes");
const usersApiRouter = require("./src/routes/Api/usersApi.routes");

// Express
const app = express();

// .env
require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

/* MIDDLEWARES*/
app.use(
  session({
    secret: "Esto es un secreto wow",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(userLoggedMiddleware);
app.use(cors());

// Routes
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);
// Api routes
app.use("/api/users", usersApiRouter);
app.use("/api/products", productsApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
