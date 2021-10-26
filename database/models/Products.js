module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
  
    let cols = {
      product_id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      productNAme: {
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
    };
    let Products = sequelize.define(alias, cols);
  
    users.associate = function (models){
   
    }
  
  };