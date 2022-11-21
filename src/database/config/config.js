module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASS,
    database: 'sportshoes_db_v2',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};

//gabriel pass "Pass55word!!"