require('dotenv').config(); //「.env」ファイルをbackendフォルダ直下に作成
const path = require('path');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME || 'test',
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || null,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
