module.exports = (sequelize, DataTypes) => {
    let alias = "cart";
  
    let cols = {
      cart_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
  
      user_id: {
        type: DataTypes.INTEGER(11),
        //foreingKey
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
    };
  
    let cart = sequelize.define(alias, cols);
    cart.associate = function (models) {};
  };