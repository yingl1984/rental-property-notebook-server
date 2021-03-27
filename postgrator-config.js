require('dotenv').config();

const  {NODE_ENV,DATABASE_URL,TEST_DATABASE_URL} = require('./src/config');

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": (NODE_ENV === 'test')
   ? TEST_DATABASE_URL : DATABASE_URL
}