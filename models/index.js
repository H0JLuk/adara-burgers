'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = { Sequelize };

if (config.use_env_variable) {
  db.sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db.sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      db.sequelize,
      Sequelize.DataTypes,
    );
    // model.sync({ alter: true });
    // model.sync({ force: true });

    db[model.name] = model;
  });

for (const modelName of Object.keys(db)) {
  db[modelName].associate?.(db);
}

db.sequelize.sync({ alter: true }).catch(console.log);

module.exports = db;
