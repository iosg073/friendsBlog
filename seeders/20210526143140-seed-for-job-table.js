'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Jobs', [
       {
     title: 'Associate Project Engineer ',
     detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    img: "https://csanders429.files.wordpress.com/2018/12/union-pacific-2.jpg" 
    },
    {
      title: 'Develper ',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     img: "https://miro.medium.com/max/2048/0*v69IJHr5RnKBwwM1.jpg" 
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
