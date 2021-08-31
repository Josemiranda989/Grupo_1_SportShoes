/* Lista de Productos .JSON */
const allShoes = require('../data/productList.json')

const productController = {
    
    productCart: (req, res) => {
        res.render('productCart');

    },/* 

    allProducts: (req, res) => {
        res.render ('allProducts')
    },  */
    
    productDetail: (req, res) => {
        const shoes= req.params.shoes
        let shoesParaMostrar;

        for( let i=0; i< allShoes.length; i++){
            if (allShoes[i].productName==shoes ){
                shoesParaMostrar=allShoes[i];
              }
            }
        res.render('productDetail',{product:shoesParaMostrar});
    }
}

module.exports = productController