require("dotenv").config();

/* REQUIRES */
let createError = require("http-errors");
let express = require("express");
let path = require("path");
/* Routers Apis */
let productsApiRouter = require("./src/routes/Api/productsApi.routes");
let usersApiRouter = require("./src/routes/Api/usersApi.routes");
/* Routers */
let indexRouter = require("./src/routes/index.routes");
let productsRouter = require("./src/routes/products.routes");
let usersRouter = require("./src/routes/users.routes");
/* Cors */
let cors = require("cors");

let cookieParser = require("cookie-parser");
let logger = require("morgan");
let methodOverride = require("method-override");
let session = require("express-session");
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");

let app = express();

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
// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

/* RUTAS DE INDEX */
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);
app.use("/error", indexRouter);
/* RUTAS DE API */
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
