"use strict";
module.exports = (sequelize, DataTypes) => {
  const StudyGuidanceSession = sequelize.define(
    "StudyGuidanceSession",
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
      subject_likes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      subject_difficulties: {
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
  StudyGuidanceSession.associate = function (models) {
    StudyGuidanceSession.belongsTo(models.Counselor, {
      foreignKey: "counselor_id",
    });
  };
  return StudyGuidanceSession;
};
