"use strict";
module.exports = (sequelize, DataTypes) => {
  const Counselor = sequelize.define(
    "Counselor",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Counselor.associate = function (models) {
    // Definisikan relasi jika ada
    Counselor.hasMany(models.IndividualSession, {
      foreignKey: "counselor_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Counselor.hasMany(models.GroupSession, {
      foreignKey: "counselor_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Counselor.hasMany(models.StudyGuidanceSession, {
      foreignKey: "counselor_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    Counselor.hasMany(models.CareerGuidanceSession, {
      foreignKey: "counselor_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Counselor;
};
