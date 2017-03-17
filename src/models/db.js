const Sequelize = require('sequelize');
// load variables from .env file
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_POST,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  });

  // define the tables
const url = sequelize.define('url', {
  original: {
    type: Sequelize.STRING,
    // validate: {
    //   isURL: true,
    // },
  },
  shortURL: {
    type: Sequelize.STRING,
    //unique: true,
  },
});

  // sync database with setup
sequelize.sync();

// exports to use
exports.sequelize = sequelize;
exports.url = url;
