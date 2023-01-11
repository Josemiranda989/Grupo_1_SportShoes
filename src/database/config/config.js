module.exports = {
  development: {
    username: "root",
    password: "",
    database: "sportshoes_db_v2",
    port: 3306,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: 0,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    // port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
  },
};