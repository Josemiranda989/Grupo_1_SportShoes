module.exports = (sequelize, DataTypes) => {
  let alias = 'cartproduct'

  let cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },

    cart_id: {
      type: DataTypes.INTEGER(11),
    },

    product_id: {
      type: DataTypes.INTEGER(11),
    },

    quantity: {
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
    tableName: 'cartproduct',
  }
  
  let cartproduct = sequelize.define(alias, cols, config)
  cartproduct.associate = function (models) {
    cartproduct.belongsTo(models.Product, {
      as: 'cartproduct',
      foreignKey: 'product_id',
      otherKey: 'user_id',
    })
  }

/*   cartproduct.associate = function(models){
      cartproduct.belongsTo(models.Product,{
          foreignKey:'product_id'
      })
  }
  cartproduct.associate = function(models){
      cartproduct.belongsTo(models.User,{
          foreignKey:'user_id'
      })
  } */
}
