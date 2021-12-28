const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator')
let db = require("../database/models");
const Op = db.Sequelize.Op;


/* Lista de Productos .JSON */
let allShoesFilePath = path.join(__dirname, "../data/productList.json");
let allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, "utf-8"));

const productController = {
  // Todos los productos
  products: (req, res) => {
    //res.render('products', { allShoes: allShoes })
    db.Product.findAll().then(function (products) {
      res.render("products/products", { allShoes: products, titulo: "All Shoes" });
    });
  },
  asc: (req, res) => {

    db.Product.findAll({order:[['price', 'Asc']]}).then(function (products) {
      res.render("products/products", { allShoes: products, titulo: "De menor a mayor" });
    });
  },
  desc: (req, res) => {
    //res.render('products', { allShoes: allShoes })
    db.Product.findAll({order:[['price', 'desc']]}).then(function (products) {
      res.render("products/products", { allShoes: products, titulo: "De mayor a menor", });
    });
  },

  sale: (req, res) => {
    db.Product.findAll().then(function (products) {
      let resultado = products.filter(product => product.price < 90)
      res.render("products/products", { allShoes: resultado, titulo: "On Sale" });
    });
  },
  // Detalle de un producto particular
  productDetail: (req, res) => {
    let idShoes = db.Product.findByPk(parseInt(req.params.id, 10));
    idShoes.then(function (productSelected) {
      res.render("products/detail", { product: productSelected });
    });    
  },

  // Productos de Carrito
  productCart: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("products/cart", { allShoes: products, titulo: "All Shoes" });
    });
    
  },
  // Create - Vista del Formulario
  create: (req, res) => {
    res.render("products/create");
  },
  // Create - Metodo para almacenar
  store: (req, res) => {
    const resultValidation = validationResult(req)

    if (resultValidation.errors.length > 0) {
      return res.render('products/create', {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      })
    }

    if (req.file) {
      if (req.file.filename) {
        db.Product.create({
          productName: req.body.productName,
          price: parseInt(req.body.price, 10),
          brand: req.body.brand,
          color: req.body.color,
          description: req.body.description,
          size: parseInt(req.body.size, 10),
          category: req.body.category,
          img1: req.file.filename,
        }).then(function () {
          res.redirect("/products");
        });
      }
    } else {
      res.send("please send a picture");
    }
  },

  // BARRA SEARCH ITEMS   
  search: (req, res) => {
    db.Product.findAll({
       where: {
         productName: { [Op.like]: `%${req.query.shoes}%` }
        }
    }).then(products => {
         return res.render('products/products', { allShoes: products,titulo: "Search Result's" })
    })
      .catch(error => res.send(error));
  },

  // Edit - Vista del Formulario
  edit: (req, res) => {
    let idShoes = db.Product.findByPk(parseInt(req.params.id, 10));
    idShoes.then(function (productToEdit) {
      res.render("products/edit", { productToEdit: productToEdit });
    });
  },

  // Update - Metodo para editar producto
  update: (req, res) => {
    const resultValidation = validationResult(req)

    let id = req.params.id;
    db.Product.findByPk(id).then((prod) => {
      if (resultValidation.errors.length > 0) {
        return res.render('products/edit' , {
          //mapped convierte un array en objeto literal
          errors: resultValidation.mapped(),
          oldData: req.body,
        })
      }
      db.Product.update(
        {
          productName: req.body.productName || prod.productName,
          price: req.body.price || prod.price,
          brand: req.body.brand || prod.brand,
          description: req.body.description || prod.description,
          size: req.body.size || prod.size,
          color: req.body.color || prod.color,
          category: req.body.category || prod.category,
          img1: req.file == undefined ? prod.img1 : req.file.filename,
        },
        {
          where: {
            product_id: id,
          },
        }
      )
        .then(() => {
          return res.redirect("/products/detail/" + id);
        })
        .catch((error) => res.send(error));
    });
  },

  // Delete - Borrar un producto de la base de datos
  delete: function (req, res) {
    db.Product.destroy({
      where: { product_id: parseInt(req.params.id, 10) },
      force: true,
    }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        return res.redirect("/products/products");
      })
      .catch((error) => res.send(error));
  },
};

module.exports = productController;
