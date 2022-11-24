const mainController = {
  index: (req, res) => {
    res.render("index", { title: "SPORT SHOES" });
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
