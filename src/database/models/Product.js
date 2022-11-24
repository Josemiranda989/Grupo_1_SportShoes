module.exports = (sequelize, DataTypes) => {
  let alias = 'Product'

  let cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING(255),
    },
    price: {
      type: DataTypes.INTEGER(11),
    },

    description: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.STRING(255),
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
    tableName: 'products',
    paranoid: true
  }

  let Product = sequelize.define(alias, cols, config)

return Product
}
