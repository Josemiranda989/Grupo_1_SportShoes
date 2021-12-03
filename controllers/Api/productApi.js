let db = require('../../database/models')
const Op = db.Sequelize.Op

const productApi = {
  products: (req, res) => {
    //res.render('products', { allShoes: allShoes })

    /* crear variables */
    db.Product.findAll().then((products) =>
      res.status(200).json({
        count: products.length,
        countByCategory:{
            men:  db.Product.findAll({
                where: {
                  category: { [Op.like]: 'Men´s' }
                 }
             }) ,
            women:    db.Product.findAll({
                   where: {
                    category: { [Op.like]: 'Women´s' }
                    }
                }) ,  
        },
              
        data: products,
        status: 200,
      }),
    )
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