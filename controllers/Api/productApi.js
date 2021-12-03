let db = require('../../database/models')
const Op = db.Sequelize.Op

const productApi = {
  products: (req, res) => {
    let countMens = db.Product.findAndCountAll({
      where: {
        category: { [Op.like]: 'Men´s' }
      }
    }).then(result => {
      countMens = result.count
    });
    let countWomens = db.Product.findAndCountAll({
      where: {
        category: { [Op.like]: 'Women´s' }
      }
    }).then(result => {
      countWomens = result.count
    });
    

    db.Product
      .findAll()
      .then(products => {
        let IfcountMens = 0
        let IfcountWomens = 0
        for (let i = 1; i < products.length; i++) {
          if (products[i].category == 'Women´s') {
            IfcountWomens += 1
          } else {
            IfcountMens += 1
          }
        }
        res.status(200).json({
          count: products.length,
          countByCategory: {
            men: countMens,
            women: countWomens,
          },
          countIF: {
            men: IfcountMens,
            women: IfcountWomens
          },
          data: products,
          status: 200,
        })
      })
  },
        
  productDetail: (req, res) => {
    db.Product.findByPk(req.params.id).then(function (productSelected) {
      res.status(200).json({
        data: productSelected,
        status: 200,
      })
    })
  },

    store: (req, res) => {
      db.Product
          .create(req.body)
          .then((product) => {
      return res.status(200).json({
        data: product,
          status: 200,
        created: "ok"
      })
    })
    },
    
    delete: (req, res) => {
        db.Product
            .destroy({
                where: { product_id: parseInt(req.params.id, 10) }
            })
            .then(() => {
            return res.json("Product Deleted")
        })
    },

    search: (req, res) => {
        db.Product.findAll({
               where: {
                 productName: { [Op.like]: "%"+ req.query.keyword +"%" }
                }
            })
            .then(products => {
                if (products.length > 0) {
                     res.status(200).json({
                    data: products,
                    status: 200
                })
                } else {
                    res.status(200).json({
                        data: "No existen productos con ese nombre",
                        status:200
                    })
                }
               
        })
    },
}

module.exports = productApi