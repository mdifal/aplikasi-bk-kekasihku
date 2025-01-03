"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("counselors", [
      {
        name: "John Doe",
        phone: "123456789",
        username: "johndoe",
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        phone: "987654321",
        username: "janesmith",
        password: "password456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("counselors", null, {});
  },
};
