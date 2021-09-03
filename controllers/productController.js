const fs = require('fs')
const path = require('path')

/* Lista de Productos .JSON */
const allShoesFilePath = path.join (__dirname, '../data/productList.json')
const allShoes = JSON.parse(fs.readFileSync(allShoesFilePath, 'utf-8'))

const productController = {
    
    productCart: (req, res) => {
        res.render('productCart');

    }, 

    products: (req, res) => {
        res.render ('products', {allShoes: allShoes})
    }, 
    
    productDetail: (req, res) => {
        const idShoes= parseInt(req.params.id)
        let productSelected;

        for( let i=0; i< allShoes.length; i++){
            if (allShoes[i].id==idShoes ){
                productSelected=allShoes[i];
              }
            }
        res.render('productDetail',{product:productSelected});
    },


    create:(req,res)=>{
        res.render('create');
    },

    edit:(req,res)=>{
        res.render('edit');
    }


}




module.exports = productController