'use strict';

module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.TINYINT,
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

  reviews.associate = async (models) => {
    await models.review.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  return reviews;
};
