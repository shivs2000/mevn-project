'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */



     await queryInterface.addColumn(
          'useruserfollows', // name of Target model
          'UserUserFollowId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references:{
              model: 'Users', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          },
        );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn(
       'UserUserFollowId'
     );
  }
};
