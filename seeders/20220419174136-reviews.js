'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'reviews',
      [
        {
          content:
            'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
          photo: 'img/testmonial/1.png',
          name: 'Kristiana Chouhan',
          rating: 4.5,
        },
        {
          content:
            'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
          photo: 'img/testmonial/2.png',
          name: 'Arafath Hossain',
          rating: 4,
        },
        {
          content:
            'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.',
          photo: 'img/testmonial/3.png',
          name: 'A.H Shemanto',
          rating: 5,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  },
};
