"use strict";
module.exports = (sequelize, DataTypes) => {
  const GroupSession = sequelize.define(
    "GroupSession",
    {
      counselor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      group_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      group_members: {
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
  GroupSession.associate = function (models) {
    GroupSession.belongsTo(models.Counselor, {
      foreignKey: "counselor_id",
    });
  };
  return GroupSession;
};
