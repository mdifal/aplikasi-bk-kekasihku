"use strict";
module.exports = (sequelize, DataTypes) => {
  const CareerGuidanceSession = sequelize.define(
    "CareerGuidanceSession",
    {
      counselor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      student_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      career_plan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
    },
    {}
  );
  CareerGuidanceSession.associate = function (models) {
    CareerGuidanceSession.belongsTo(models.Counselor, {
      foreignKey: "counselor_id",
    });
  };
  return CareerGuidanceSession;
};
