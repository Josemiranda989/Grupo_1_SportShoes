module.exports = (sequelize, DataTypes) => {
  let alias = 'User'
  let cols = {
    id: {
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
      type: DataTypes.STRING(50),
    },

    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.STRING(255),
    },
    admin: {
      type: DataTypes.INTEGER(1)
    },
    address: {
      type: DataTypes.STRING(255),
    },
    avatar: {
      type: DataTypes.STRING(255),
    },

    createdAt: {
      type: DataTypes.DATE,
    },

    updatedAt: {
      type: DataTypes.DATE,
    },

    deletedAt: {
      type: DataTypes.DATE,
    },

  }

  let config = {
    tableName: 'users',
    paranoid: true
  }

  let User = sequelize.define(alias, cols, config)

/*   User.associate = function (models) {
    User.belongsToMany(models.Product, {
      as: 'carts_products',
      foreingKey: 'user_id',
      otherKey: "product_id",
      through: "Cartproduct"
    })
  } */

  User.associate = (models) => {
    User.hasMany(models.Order, {
      as: "orders",
      foreignKey: "userId",
    });
  };

  return User
}
