const fs = require('fs')
const path = require('path')

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

}

module.exports=userController;