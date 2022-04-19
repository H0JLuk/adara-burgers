'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'feedbacks',
      [
        {
          name: 'John Doe',
          message: 'All good!',
          email: 'john-doe@gmail.com',
          subject: 'review',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('feedbacks', null, {});
  },
};
