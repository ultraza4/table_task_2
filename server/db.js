const Pool = require("pg").Pool;

// коннектимся к базе данных PostgresSQL с именем Пользователя, паролем и именем БД (в моем случае postgres и "worktask")  
const pool = new Pool({
    user: "postgres",
    password: "admin",
    port: 5432,
    database: "worktask"
});

module.exports = pool;
