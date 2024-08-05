'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(9),
        unique: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(42)
      },
      description: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(2, 10),
        allowNull: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      category: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      image: {
        type: Sequelize.STRING(128),
        allowNull: true
      },
      rating: {
        type: Sequelize.TINYINT,
        allowNull: true
      },
      createdAt: {
        type : Sequelize.DATE
      },
      updatedAt: {
        type : Sequelize.DATE
      },
    })

    // INITIAL TEST DATA

    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('/usr/src/app/src/assets/products.json', 'utf8'));

    await queryInterface.bulkInsert('products', obj.data.map(p => { delete p["inventoryStatus"]; return {...p, createdAt: new Date(), updatedAt: new Date()} }))

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('products');
  }
};
