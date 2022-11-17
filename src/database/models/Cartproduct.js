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

    updated_at: {
      type: DataTypes.DATE,
    },

    deleted_at: {
      type: DataTypes.DATE,
    },
  }

  let config = {
    tableName: 'cartproduct',
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true
  }
  
  let Cartproduct = sequelize.define(alias, cols, config)

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
  } 
  
  return Cartproduct
}
*/