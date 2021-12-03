const fs = require('fs')
const path = require('path')

/* Lista de Productos .JSON */
const allShoesFilePath = path.join(__dirname, '../data/productList.json')
const allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, 'utf-8'))

const mainController = {
  index: (req, res) => {
    res.render('index', { title: 'SPORT SHOES' })
  },

  error: (req, res) => {
    res.render('error')
  },

  terms: (req, res) => {
    res.render('footer/terms')
  },

  privacy: (req, res) => {
    res.render('footer/privacy')
  },

  shippinginfo: (req, res) => {
    res.render('footer/shippinginfo')
  },

  covidinfo: (req, res) => {
    res.render('footer/covidinfo')
  },

  contactus: (req, res) => {
    res.render('footer/contactus')
  },
  map: (req, res) => {
    res.render('footer/map')
  },
  aboutus: (req, res) => {
    res.render('footer/aboutus')
  },
  help: (req, res) => {
    res.render('footer/help')
  },
}

module.exports = mainController
