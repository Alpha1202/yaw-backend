'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        required: true,
      },
      lastName: {
        type: Sequelize.STRING,
        required: true,
      },
      userName: {
        type: Sequelize.STRING,
        required: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING,
        required: true,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        required: false,
        defaultValue: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        required: true,
        unique: true,
      },
      about: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING,
        required: false,
      },
      verificationToken: {
        type: Sequelize.STRING,
        required: false,
      },
      emailNotification: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      category: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

