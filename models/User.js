'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
  });

  users.associate = (models) => {
    models.user.hasMany(models.review, { as: 'reviews' });
  };
  return users;
};
