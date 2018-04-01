const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const db = new Sequelize(
    //mysql://user:pass@localhost:5432 for MySQL
    process.env.DATABASE_URL || `postgres://localhost:5432/[databaseName]`,
    {
      logging: true //false for brevity 
    }
  );
  module.exports = db;

