/* Lista de Productos .JSON */
const allShoes = require ('../data/productList.json')


const mainController = {
    index: (req, res) => { 
        res.render('index', { title: 'SPORT SHOES' });
    },
    
    error: (req, res) => {
        res.render('error');

    },
    
    login: (req, res) => {
        res.render('login');

    },
      
    register: (req, res) => {
        res.render('register');

    },
    
    terms: (req, res) => {
        res.render('terms');

    },

    allProducts: (req, res) => {
        res.render ('allProducts', {allShoes: allShoes})
    },    
}

    



module.exports = mainController;


