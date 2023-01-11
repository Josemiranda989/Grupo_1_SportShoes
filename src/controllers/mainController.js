const db = require("../database/models");


const mainController = {
  index: async (req, res) => {
    const products = await db.Product.findAll({
      limit: 6,
      order: db.sequelize.random(),
    });
    products.forEach(element => {
      console.log(element.id);
    });
    res.render("index", { title: "SPORT SHOES",  products});
  },

  terms: (req, res) => {
    res.render("others/terms");
  },

  privacy: (req, res) => {
    res.render("others/privacy");
  },

  shippinginfo: (req, res) => {
    res.render("others/shippinginfo");
  },

  covidinfo: (req, res) => {
    res.render("others/covidinfo");
  },

  contactus: (req, res) => {
    res.render("others/contactus");
  },
  map: (req, res) => {
    res.render("others/map");
  },
  aboutus: (req, res) => {
    res.render("others/aboutus");
  },
  help: (req, res) => {
    res.render("others/help");
  },
};

module.exports = mainController;
