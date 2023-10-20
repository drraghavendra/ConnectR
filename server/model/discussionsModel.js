module.exports = (sequelize, DataTypes) => {
  const discussion = sequelize.define("discussion", {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Views: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return discussion;
};
