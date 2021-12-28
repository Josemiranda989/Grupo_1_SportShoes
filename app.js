require("dotenv").config();

/* REQUIRES */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
/* Routers Apis */
var indexApiRouter = require("./routes/Api/indexApi");
var productsApiRouter = require("./routes/Api/productsApi");
var usersApiRouter = require("./routes/Api/usersApi");
/* Routers */
var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var usersRouter = require("./routes/users");
/* Cors */
var cors = require("cors");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

var app = express();

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
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(userLoggedMiddleware);
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* RUTAS DE INDEX */
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);
app.use("/error", indexRouter);
/* RUTAS DE API */
/* app.use('/api', indexApiRouter);*/
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
