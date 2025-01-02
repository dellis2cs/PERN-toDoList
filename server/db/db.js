const Pool = require("pg").Pool;

const pool = new Pool({
  user: "dellis2",
  password: "b6yQfmCb",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
