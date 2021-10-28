module.exports = (sequileze, DataTypes) => {
  let alias = 'users'
  let cols = {
    user_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },

    fullNAme: {
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

    adress: {
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
  }

  let config = {
    tableName: 'users',
  }

  let Usuario = sequelize.define(alias, cols, config)

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Cart, {
      as: 'usercart',
      foreingKey: 'user_id',
    })
  }
}
