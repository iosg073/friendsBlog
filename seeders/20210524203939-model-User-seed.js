'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Users', [
       {
        name: 'Jeremiah Miller',
        username: 'jmiller',
        email: 'jmillerr@up.com',
        phone: "12347586809",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        photo: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
      },
      {
        name: 'Baibhav Kumar',
        username: 'bkumar',
        email: 'bkumar@up.com',
        phone: "12347586809",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        photo: "http://img.pokemondb.net/artwork/bulbasaur.jpg"

      },
      {
        name: 'Pachel Pederson',
        username: 'pachel',
        email: 'ppachelr@up.com',
        phone: "12347586809",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        photo: "http://img.pokemondb.net/artwork/bulbasaur.jpg"

      },
      {
        name: 'Julia Christensen',
        username: 'julia',
        email: 'cjulia@up.com',
        phone: "12347586809",
        aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        photo: "http://img.pokemondb.net/artwork/bulbasaur.jpg"

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
