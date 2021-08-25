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
    
    productDetail: (req, res) => {
        res.render('productDetail');

    },
    
    register: (req, res) => {
        res.render('register');

    },
    
    terms: (req, res) => {
        res.render('terms');

    },
}

    



module.exports = mainController;