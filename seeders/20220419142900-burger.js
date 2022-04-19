'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'burgers',
      [
        {
          title: 'Beefy Burgers',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 5,
          image: 'img/burger/1.png',
        },
        {
          title: 'Burger Boys',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 7,
          image: 'img/burger/2.png',
        },
        {
          title: 'Burger Bizz',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 4,
          image: 'img/burger/3.png',
        },
        {
          title: 'Crackles Burger',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 6,
          image: 'img/burger/4.png',
        },
        {
          title: 'Bull Burgers',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 8,
          image: 'img/burger/5.png',
        },
        {
          title: 'Rocket Burgers',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 12,
          image: 'img/burger/6.png',
        },
        {
          title: 'Smokin Burger',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 11,
          image: 'img/burger/7.png',
        },
        {
          title: 'Delish Burger',
          description:
            'Great way to make your business appear trust and relevant.',
          price: 6,
          image: 'img/burger/8.png',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('burgers', null, {});
  },
};
