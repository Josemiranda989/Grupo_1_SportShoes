var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index);
router.get('/error', mainController.error);
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);
router.get('/terms', mainController.terms);


//router.get('/', mainController.productDetail);

router.get("/:shoes", (req, res) => {
    const product =[    
    {
         
       nameproduct: "Adidas-Flowers",
       brand: "Adidas",
       description: "adidas Superstar Shoes have graced the glossy hardwood of basketball courts, the concrete floors of arenas and millions of miles of city sidewalks.",
       price: 180,
       size: 8,
       category: "Men´s",
       img1: "/images/shoes-img/Adidas-Flowers/1.png",
       img2: "/images/shoes-img/Adidas-Flowers/2}.png",
       img3: "/images/shoes-img/Adidas-Flowers/3.png",
       img4: "/images/shoes-img/Adidas-Flowers/4.png"
     },
   
     {
       nameproduct: "Adidas-Originals",
       brand: "Adidas",
       description: "Primeknit, adaptive knit, and mesh allow you to customize the look and feel of your shoes.",
       price: 170,
       size: 9,
       category: "Women´s",
       img1: "/images/shoes-img/Adidas-originals/1.png",
       img2: "images/shoes-img/Adidas-Originals/2.png",
       img3: "images/shoes-img/Adidas-Originals/3.png",
       img4: "images/shoes-img/Adidas-Originals/4.png"
     },
   
     {
       nameproduct: "Adidas-pw",
       brand: "Adidas",
       description: "Lace closure provides a secure fit.",
       price: 165,
       size: 10,
       category: "Men´s",
       img1: "/images/shoes-img/Adidas-pw/1.png",
       img2: "images/shoes-img/Adidas-pw/2.png",
       img3: "images/shoes-img/Adidas-pw/3.png",
       img4: "images/shoes-img/Adidas-pw/4.png"
     },
    ]
    const shoes= req.params.shoes
    let shoesParaMostrar;

    for( let i=0; i< product.length; i++){
        if (product[i].nameproduct==shoes ){
            shoesParaMostrar=product[i];
          }
        }

    res.render('productDetail',{product:shoesParaMostrar});

});

module.exports = router;
