'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'userid', {type: Sequelize.INTEGER})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
