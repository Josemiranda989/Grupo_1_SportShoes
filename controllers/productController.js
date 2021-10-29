const fs = require("fs");
const path = require("path");
let db = require("../database/models");
let allShoesDB = db.Product.findAll();


/* Lista de Productos .JSON */
let allShoesFilePath = path.join(__dirname, "../data/productList.json");
let allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, "utf-8"));

const productController = {
  // Todos los productos
  products: (req, res) => {
    //res.render('products', { allShoes: allShoes })
    allShoesDB.then(function (products) {
      res.render("products", { allShoes: products });
    });
  },

  // Detalle de un producto particular
  productDetail: (req, res) => {
    let idShoes=db.Product.findByPk(parseInt(req.params.id,10))
    idShoes
    .then(function (productSelected) {
      res.render("productDetail", { product: productSelected });
    });

    /* let idShoes = parseInt(req.params.id)
        let productSelected;

        for (let i = 0; i < allShoes.length; i++) {
            if (allShoes[i].id == idShoes) {
                productSelected = allShoes[i];
            }
        }
        res.render('productDetail', { product: productSelected });*/
  },
  // Productos de Carrito
  productCart: (req, res) => {
    res.render("productCart");
  },

  // Create - Vista del Formulario
  create: (req, res) => {
    res.render("productCreate");
  },

  // Create - Metodo para almacenar
  store: (req, res) => {
    if (req.file) {
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
    }
  },

  // BARRA SEARCH ITEMS
  search: (req, res) => {
    console.log(req.query.shoes);
    let loqueBuscoElUsuario = req.query.shoes.toLowerCase();
    let userResults = [];

    for (let i = 0; i < allShoes.length; i++) {
      console.log("primera var ", allShoes[i].brand);
      console.log("segunda var", allShoes[i].productName);
      if (
        allShoes[i].brand.toLowerCase().includes(loqueBuscoElUsuario) ||
        allShoes[i].productName.toLowerCase().includes(loqueBuscoElUsuario)
      ) {
        userResults.push(allShoes[i]);
      }
    }

    res.render("products", { allShoes: userResults });
  },

  // Edit - Vista del Formulario
  edit: (req, res) => {
    let allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, "utf-8"));
    let idProduct = parseInt(req.params.id);
    let productToEdit = allShoes.filter((i) => i.id === idProduct);
    res.render("productEdit", { productToEdit: productToEdit });
  },

  // Update - Metodo para editar producto
  update: (req, res) => {
    let idProduct = parseInt(req.params.id);
    let allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, "utf-8"));
    allShoes.forEach((product) => {
      if (product.id == idProduct) {
        product.productName = req.body.productName;
        product.price = req.body.price;
        product.brand = req.body.brand;
        product.description = req.body.description;
        product.size = req.body.size;
        product.category = req.body.category;
        if (req.file) {
          let indexShoe = allShoes.findIndex(
            (product) => product.id == idProduct
          );
          let imagePath = path.join(
            __dirname,
            `../public/images/shoes-img/${req.body.productName}`,
            allShoes[indexShoe].productName,
            allShoes[indexShoe].img1
          );
          fs.unlink(imagePath, function (err) {
            if (err) throw err;
          });
          product.img1 = req.file.filename;
        }
      }
    });
    let allShoesJSON = JSON.stringify(allShoes, null, " ");
    fs.writeFileSync(allShoesFilePath, allShoesJSON);
    res.redirect("/products");
  },

  // Delete - Borrar un producto de la base de datos
  delete: (req, res) => {
    let idProduct = parseInt(req.params.id);
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
    res.redirect("/products");
  },
};

module.exports = productController;
