'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var _queryInterface$creat;

    return queryInterface.createTable('Users', (_queryInterface$creat = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        required: true
      },
      lastName: {
        type: Sequelize.STRING,
        required: true
      },
      userName: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING,
        required: true
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        required: false,
        defaultValue: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      about: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING,
        required: false
      },
      verificationToken: {
        type: Sequelize.STRING,
        required: false
      },
      emailNotification: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      category: {
        type: Sequelize.STRING
      }
    }, _defineProperty(_queryInterface$creat, "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }), _defineProperty(_queryInterface$creat, "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }), _queryInterface$creat));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};