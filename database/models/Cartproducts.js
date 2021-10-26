module.exports = (sequelize, DataTypes) => {
  let alias = "cartproducts";

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

  let cartproducts = sequelize.define(alias, cols);
  cartproducts.associate = function (models) {};
};
