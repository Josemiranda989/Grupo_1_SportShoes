// const fs = require("fs");
// const path = require("path");
const { validationResult } = require("express-validator");
let db = require("../database/models");
const Op = db.Sequelize.Op;

/* Lista de Productos .JSON */
// let allShoesFilePath = path.join(__dirname, "../data/productList.json");
// let allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, "utf-8"));

const productController = {
  // Todos los productos
  products: async (req, res) => {
    //res.render('products', { allShoes: allShoes })
    try {
      let products = await db.Product.findAll();
      res.render("products/products", {
        allShoes: products,
        titulo: "All Shoes",
      });
    } catch (error) {
      res.json(error);
    }
  },
  asc: async (req, res) => {
    try {
      let allShoes = await db.Product.findAll({ order: [["price", "Asc"]] });
      res.render("products/products", {
        allShoes,
        titulo: "De menor a mayor",
      });
    } catch (error) {
      res.json(error);
    }
  },
  desc: async (req, res) => {
    try {
      let allShoes = await db.Product.findAll({ order: [["price", "Desc"]] });
      res.render("products/products", {
        allShoes,
        titulo: "De mayor a menor",
      });
    } catch (error) {
      res.json(error);
    }
  },

  sale: async (req, res) => {
    try {
      let inDiscount = await db.Product.findAll({
        where: {
          price: {
            [Op.lt]: 130,
          },
        },
      });
      res.render("products/products", {
        allShoes: inDiscount,
        titulo: "On Sale",
      });
    } catch (error) {
      res.json(error);
    }
  },
  // Detalle de un producto particular
  productDetail: async (req, res) => {
    try {
      let product = await db.Product.findByPk(parseInt(req.params.id, 10));
      res.render("products/detail", { product });
    } catch (error) {
      res.send(error);
    }
  },

  // Productos de Carrito
  productCart: async (req, res) => {
    try {
      let products = await db.Product.findAll();

      res.render("products/cart", {
        allShoes: products,
        titulo: "All Shoes",
      });
    } catch (error) {
      res.send(error);
    }
  },
  //  Order
  order: async (req, res) => {
    let order = await db.Order.findByPk(req.params.id, {
      include: db.Order.OrderItems,
    });
    console.log(order);
    return res.render("products/order", { order });
  },

  // Create - Vista del Formulario
  create: (req, res) => {
    res.render("products/create");
  },
  // Create - Metodo para almacenar
  store: async (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("products/create", {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    if (req.file) {
      await db.Product.create({
        productName: req.body.productName,
        price: parseInt(req.body.price, 10),
        brand: req.body.brand,
        color: req.body.color,
        description: req.body.description,
        size: parseInt(req.body.size, 10),
        category: req.body.category,
        img: req.file.filename,
      });
      res.redirect("/products");
    } else {
      res.send("please send a picture");
    }
  },

  // BARRA SEARCH ITEMS
  search: async (req, res) => {
    try {
      let products = await db.Product.findAll({
        where: {
          productName: { [Op.like]: `%${req.query.shoes}%` },
        },
      });
      return res.render("products/products", {
        allShoes: products,
        titulo: "Search Result's",
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Edit - Vista del Formulario
  edit: async (req, res) => {
    try {
      let productToEdit = await db.Product.findByPk(
        parseInt(req.params.id, 10)
      );
      res.render("products/edit", { productToEdit });
    } catch (error) {
      console.log(error);
    }
  },

  // Update - Metodo para editar producto
  update: async (req, res) => {
    const resultValidation = validationResult(req);
    let id = req.params.id;

    let prod = await db.Product.findByPk(id);
    if (resultValidation.errors.length > 0) {
      return res.render("products/edit", {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    await db.Product.update(
      {
        productName: req.body.productName || prod.productName,
        price: req.body.price || prod.price,
        brand: req.body.brand || prod.brand,
        description: req.body.description || prod.description,
        size: req.body.size || prod.size,
        color: req.body.color || prod.color,
        category: req.body.category || prod.category,
        img: req.file == undefined ? prod.img : req.file.filename,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.redirect("/products/detail/" + id);
  },

  // Delete - Borrar un producto de la base de datos
  delete: async function (req, res) {
    try {
      await db.Product.destroy({
        where: { id: parseInt(req.params.id, 10) }
      });
      return res.redirect("/products/products");
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = productController;
