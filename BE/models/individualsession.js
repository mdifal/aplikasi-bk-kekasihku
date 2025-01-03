"use strict";
module.exports = (sequelize, DataTypes) => {
  const IndividualSession = sequelize.define(
    "IndividualSession",
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
  IndividualSession.associate = function (models) {
    IndividualSession.belongsTo(models.Counselor, {
      foreignKey: "counselor_id",
    });
  };
  return IndividualSession;
};
