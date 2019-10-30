module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        required: true,
      },
      lastName: {
        type: DataTypes.STRING,
        required: true,
      },
      userName: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
      },
      about: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
        required: false,
      },
      verificationToken: {
        type: DataTypes.STRING,
        required: false,
      },
      emailNotification: {
        type: DataTypes.BOOLEAN,
        required: false,
      },
      category: {
        type: DataTypes.STRING,
      }
    },
  );
  return User;
};