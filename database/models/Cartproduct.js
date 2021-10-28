module.exports = (sequelize, DataTypes) => {
  let alias = 'Cartproduct'

  let cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
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
    timestamps: false
  }
  
  let Cartproduct = sequelize.define(alias, cols, config)

  Cartproduct.associate = function (models) {
    Cartproduct.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'product_id',
      otherKey: 'user_id',
    })

    return Cartproduct
  } 

 /*   Cartproduct.associate = function(models){
      Cartproduct.belongsTo(models.Product,{
          foreignKey:'product_id'
      })
  }
  Cartproduct.associate = function(models){
      Cartproduct.belongsTo(models.User,{
          foreignKey:'user_id'
      })
  } */
  
  return Cartproduct
}
