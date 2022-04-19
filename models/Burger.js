'use strict';

module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burger', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
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

  burgers.associate = (models) => {
    // burgers.hasMany(models., {
    //   as: '',
    //   foreignKey: 'burger_id',
    // });
  };
  return burgers;
};
