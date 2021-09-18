const fs = require('fs')
const path = require('path')

/* Lista de Productos .JSON */
const allUsersFilePath = path.join (__dirname, '../data/usersList.json')
const allUsers = JSON.parse(fs.readFileSync(allUsersFilePath, 'utf-8'))

const userController={

    login: (req, res) => {
        res.render('login');
    
  },
  
  processRegister: (req, res)=>{
    return res.send({
      body: req.body,
      file: req.file
    })
  },
      
    register: (req, res) => {
        res.render('register');
    
  },
    
  profile: (req, res) => {
      res.render ('userProfile')
    }

}

module.exports=userController;