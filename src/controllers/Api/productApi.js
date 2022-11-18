let db = require("../../database/models");
const Op = db.Sequelize.Op;

const productApi = {
  products: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        let countMens = 0;
        let countWomens = 1;
        /* Contador de productos por categoria */
        for (let i = 1; i < products.length; i++) {
          if (products[i].category == "Women´s") {
            countWomens += 1;
          } else {
            countMens += 1;
          }
        }
        /* Imprime campo detail en producto con url api */
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue(
            "detail",
            `http://localhost:${process.env.PORT}/api/products/${products[i].product_id}`
          );
        }

        /* Imprime url de la foto para consumir */
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue(
            "pathImg",
            `http://localhost:${process.env.PORT}/images/shoes-img/${products[i].productName}/${products[i].img1}`
          );
        }

        let response = {
          count: products.length,
          countByCategory: [
            {
              men: countMens,
            },
            {
              women: countWomens,
            },
          ],
          data: products,
          status: 200,
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },

  productDetail: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(function (productSelected) {
        let response = {
          id: productSelected.product_id,
          productName: productSelected.productName,
          brand: productSelected.brand,
          description: productSelected.description,
          color: productSelected.color,
          price: productSelected.price,
          size: productSelected.size,
          pathImg: `http://localhost:${process.env.PORT}/images/shoes-img/${productSelected.productName}/${productSelected.img1}`,
          status: 200,
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },

  store: (req, res) => {
    db.Product.create(req.body)
      .then((product) => {
        let response = {
          data: product,
          status: 200,
          created: "ok",
        };
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  delete: (req, res) => {
    db.Product.destroy({
      where: { product_id: parseInt(req.params.id, 10) },
    })
      .then(() => {
        return res.json("Product Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  },

  search: (req, res) => {
    db.Product.findAll({
      where: {
        productName: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    })
      .then((products) => {
        if (products.length > 0) {
          /* Imprime url de la foto para consumir */
          for (let i = 0; i < products.length; i++) {
            products[i].setDataValue(
              "pathImg",
              `http://localhost:${process.env.PORT}/images/shoes-img/${products[i].productName}/${products[i].img1}`
            );
          }
          res.status(200).json({
            data: products,
            status: 200,
          });
        } else {
          res.status(200).json({
            data: "No existen productos con ese nombre",
            status: 200,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = productApi;
