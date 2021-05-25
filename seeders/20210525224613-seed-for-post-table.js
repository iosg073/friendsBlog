'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
 
     
   
     await queryInterface.bulkInsert('Posts', [
       {
        title: "Nodejs Tip and Tricks ",
        postbody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        like: 0, 
        comment: "Love this post !!!"
     },
     {
      title: "Sequelize is Fun!!! ",
      postbody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      like: 0, 
      comment: "Really "
   },
   {
    title: "ORM model ",
    postbody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    like: 1, 
    comment: "Thank you for such a niece blog !!! "
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
