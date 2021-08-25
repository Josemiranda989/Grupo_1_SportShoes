/* Lista de Productos .JSON */
const product = require ('../controllers/productList.json')


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
    
    productCart: (req, res) => {
        res.render('productCart');

    },
      
    register: (req, res) => {
        res.render('register');

    },
    
    terms: (req, res) => {
        res.render('terms');

    }, 
    
    productDetail: (req, res) => {
        const shoes= req.params.shoes
        let shoesParaMostrar;

        for( let i=0; i< product.length; i++){
            if (product[i].nameproduct==shoes ){
                shoesParaMostrar=product[i];
              }
            }
        res.render('productDetail',{product:shoesParaMostrar});
    }
}

    



module.exports = mainController;


