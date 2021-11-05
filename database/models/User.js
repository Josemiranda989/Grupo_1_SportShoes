const Cartproduct = require("./Cartproduct")

module.exports = (sequelize, DataTypes) => {
  let alias = 'User'
  let cols = {
    user_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },

    fullName: {
      type: DataTypes.STRING(50),
    },
    userName: {
      type: DataTypes.STRING(50),
    },

    country: {
      type: DataTypes.STRING(20),
    },

    email: {
      type: DataTypes.STRING(250),
    },
    password: {
      type: DataTypes.STRING(150),
    },

    address: {
      type: DataTypes.STRING(250),
    },

    avatar: {
      type: DataTypes.STRING(250),
    },

    created_at: {
      type: DataTypes.DATE,
    },

    updated_at: {
      type: DataTypes.DATE,
    },

    deleted_at: {
      type: DataTypes.DATE,
    },

  }

  let config = {
    tableName: 'users',
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true
  }

  let User = sequelize.define(alias, cols, config)

  User.associate = function (models) {
    User.belongsToMany(models.Product, {
      as: 'carts_products',
      foreingKey: 'user_id',
      otherKey: "product_id",
      through: "Cartproduct"
    })
  }

  return User
}
