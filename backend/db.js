const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "vulnwebapp",
    host: "localhost",
    port: 5432
})

module.exports = pool