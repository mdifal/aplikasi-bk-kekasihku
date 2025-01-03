"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("individual_sessions", [
      {
        counselor_id: 1,
        date: "2025-01-10",
        student_name: "Alice Johnson",
        student_class: "Class A",
        student_phone: "5555555555",
        details: "Studying for upcoming quiz",
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        counselor_id: 2,
        date: "2025-01-15",
        student_name: "Bob Lee",
        student_class: "Class B",
        student_phone: "5555555556",
        details: "Career counseling",
        status: "completed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("individual_sessions", null, {});
  },
};
