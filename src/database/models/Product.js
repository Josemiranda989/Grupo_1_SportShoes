module.exports = (sequelize, DataTypes) => {
  let alias = 'Product'

  let cols = {
    product_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING(50),
    },
    price: {
      type: DataTypes.INTEGER(11),
    },

    description: {
      type: DataTypes.STRING(250),
    },
    img1: {
      type: DataTypes.STRING(250),
    },

    category: {
      type: DataTypes.STRING(50),
    },

    color: {
      type: DataTypes.STRING(50),
    },
    brand: {
      type: DataTypes.STRING(50),
    },
    size: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'products',
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true
  }

  let Product = sequelize.define(alias, cols, config)

 Product.associate = function (models) {
  Product.belongsToMany(models.User, {
    as: 'carts_user',
    foreingKey: 'product_id',
    otherKey: "user_id",
    through: "Cartproduct"
  })
}

return Product
}
