const multer = require('multer');
const path = require('path');
const fs = require('fs')

// Configurar Multer
const storage = multer.diskStorage({
/*     destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/shoes-img/'))
    },
    filename: function (req, file, cb) {
        let newFileName = req.body.productName + '_1' + path.extname(file.originalname)
        cb( null, newFileName)
    } */
    destination: function (req, file, cb) {
        var newFolderName = req.body.productName
        fs.mkdirSync(path.join(__dirname,`../public/images/shoes-img/${newFolderName}/`),{recursive:true});
        cb(null, path.join(__dirname, `../public/images/shoes-img/${newFolderName}/`)) 
    },
    filename: function (req, file, cb) {
        const newFileName = '1' + path.extname(file.originalname)
        cb(null, newFileName)
    }
})

const upload = multer({ storage })

module.exports = upload