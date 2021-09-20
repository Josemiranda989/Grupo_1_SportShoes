const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

/* Lista de Productos .JSON */
const allUsersFilePath = path.join (__dirname, '../data/usersList.json')
const allUsers = JSON.parse(fs.readFileSync(allUsersFilePath, 'utf-8'))

const userController={

    login: (req, res) => {
        res.render('login');
    
  },

    register: (req, res) => {
        res.render('register');
    
  },
    
    
    processRegister: (req, res)=>{
    const resultValidation = validationResult(req);
   
    if (resultValidation.errors.length > 0) {
      return res.render('register', {
        //mapped convierte un array en objeto literal
        errors: resultValidation.mapped(),
        oldData: req.body
      })
    }
      return res.send ('Ok, las validaciones se pasaron y no tienes errores')
  },
    
  profile: (req, res) => {
      res.render ('userProfile')
    }

}

module.exports=userController;