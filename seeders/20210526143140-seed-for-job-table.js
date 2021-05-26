'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Jobs', [
       {
     title: 'Associate Project Engineer ',
     detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: "https://github.com/iosg073/friendsBlog/blob/feature/job/UP-logo.PNG" 
    },
    {
      title: 'Develper ',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     img: "https://github.com/iosg073/friendsBlog/blob/feature/job/apple-logo.PNG" 
     }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
