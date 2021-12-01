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
      res.render("products/products", { allShoes: products });
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
    res.render("products/cart");
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
          res.redirect("products/products");
        });
      }
    } else {
      res.send("please send a picture");
    }

    /* if (req.file) {
      let newShoe = {
        id: allShoes[allShoes.length - 1].id + 1,
        productName: req.body.productName,
        price: req.body.price,
        brand: req.body.brand,
        description: req.body.description,
        size: req.body.size,
        category: req.body.category,
        img1: req.file.filename,
      };
      allShoes.push(newShoe);
      let AllShoesJSON = JSON.stringify(allShoes, null, " ");
      fs.writeFileSync(allShoesFilePath, AllShoesJSON);
      res.redirect("/products");
    } else {
      res.render("productCreate");
    } */
  },
  // BARRA SEARCH ITEMS
   
  search: (req, res) => {
    db.Product.findAll({
       where: {
         productName: { [Op.like]: `%${req.query.shoes}%` }
        }
    }).then(products => {
       console.log(products.length)
         return res.render('products/products', { allShoes: products })
    })
      .catch(error => res.send(error));
  
 
 
  /* search: (req, res) => {
    let loqueBuscoElUsuario = req.query.shoes.toLowerCase();
    let userResults = [];

    for (let i = 0; i < allShoes.length; i++) {
      if (
        allShoes[i].brand.toLowerCase().includes(loqueBuscoElUsuario) ||
        allShoes[i].productName.toLowerCase().includes(loqueBuscoElUsuario)
      ) {
        userResults.push(allShoes[i]);
      }
    }

    res.render("products", { allShoes: userResults });*/
  
  },
  // Edit - Vista del Formulario
  edit: (req, res) => {
    let idShoes = db.Product.findByPk(parseInt(req.params.id, 10));
    idShoes.then(function (productToEdit) {
      res.render("products/edit", { productToEdit: productToEdit });
    });

    /* let allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, "utf-8"));
    let idProduct = parseInt(req.params.id);
    let productToEdit = allShoes.filter((i) => i.id === idProduct);
    res.render("productEdit", { productToEdit: productToEdit }); */
  },

  // Update - Metodo para editar producto

  update: (req, res) => {
    const resultValidation = validationResult(req)

    if (resultValidation.errors.length > 0) {
      return res.render('products/edit', {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      })
    }

    let id = req.params.id;
    db.Product.findByPk(id).then((prod) => {
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
    /*     if (req.file) {
      if (req.file.filename) {
        db.Product.update(
          {
            productName: req.body.productName,
            price: req.body.price,
            brand: req.body.brand,
            description: req.body.description,
            size: req.body.size,
            color:req.body.color,
            category: req.body.category,
            img1: req.file.filename,
          },
          {
            where: {
              product_id: req.params.id,
            },
          }
        );
      }
    } else {
      db.Product.update(
        {
          productName: req.body.productName,
          price: req.body.price,
          brand: req.body.brand,
          description: req.body.description,
          size: req.body.size,
          color:req.body.color,
          category: req.body.category,
         
        },
        {
          where: {
            product_id: req.params.id,
          },
        }
      );
    }
    res.redirect("/products/detail/" + parseInt(req.params.id, 10)); */

    
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

  /*let idProduct = parseInt(req.params.id);
    let indexShoe = allShoes.findIndex((product) => product.id === idProduct);
    let imagePath = path.join(
      __dirname,
      "../public/images/shoes-img",
      allShoes[indexShoe].productName,
      allShoes[indexShoe].img1
    );
    fs.unlink(imagePath, function (err) {
      if (err) throw err;
      console.log("Could not delete file!");
    });
    let allShoesUpdated = allShoes.filter((i) => i.id !== idProduct);
    let allShoesUpdatedJSON = JSON.stringify(allShoesUpdated, null, " ");
    fs.writeFileSync(allShoesFilePath, allShoesUpdatedJSON);
    
    res.redirect('/products')*/
};

module.exports = productController;
