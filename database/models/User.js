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

    modified_at: {
      type: DataTypes.DATE,
    },

    deleted_at: {
      type: DataTypes.DATE,
    },
    cartsId: {
      type: DataTypes.INTEGER(11)
    }
  }

  let config = {
    tableName: 'users',
    timestamps: false
  }

  let User = sequelize.define(alias, cols, config)

  User.associate = function (models) {
    User.belongsTo(models.Cartproduct, {
      as: 'carts',
      foreingKey: 'user_id',
    })
  }

  return User
}
