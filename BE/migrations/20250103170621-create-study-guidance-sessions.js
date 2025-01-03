"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("study_guidance_sessions", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      counselor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "counselors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      student_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      student_class: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      student_phone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      subject_likes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      subject_difficulties: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      details: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: "pending",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("study_guidance_sessions");
  },
};
