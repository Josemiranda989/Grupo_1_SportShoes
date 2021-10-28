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

    modified_at: {
      type: DataTypes.DATE,
    },

    deleted_at: {
      type: DataTypes.DATE,
    },
  }

  let config = {
    tableName: 'products',
    timestamps: false
  }

  let Product = sequelize.define(alias, cols, config)

  Product.associate = function (models) {
    Product.belongsTo(models.Cartproduct, {
      as: 'cartproducts',
      foreignKey: "product_id",
    })
  }

return Product
}
