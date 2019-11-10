module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      userName: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      about: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      verificationToken: {
        type: DataTypes.STRING,
      },
      emailNotification: {
        type: DataTypes.BOOLEAN,
      },
      category: {
        type: DataTypes.STRING,
      }
    },
  );
  return User;
};