const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    //Buscar un usuario por su ID
    findByPk: function (id) {   
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound;
    },

    //Buscar un usuario por su campo y valor
    findByField: function (field, text) {   
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound;
    },

    //Crear usuario
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
        return newUser;
        
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '))
        return true
    }
}

module.exports = User;

//console.log(User.fileName)

//console.log(User.getData())

//console.log(User.generateId());

//console.log(findAll());

//BUSQUEDA POR ID
//console.log(User.findByPK(2)) 

//SOLAMENTE TRAE 1 
//console.log(User.findByField('email',"eguerrieri@uol.com.br"))
//console.log(User.findByField("nombreApellido", "Daile Oxberry"))
//console.log(User.findByField("domicilio", "8660 Swallow Plaza"))
//console.log(User.findByField("usuario": "bshuttelln"))

// CREA USUARIO
//console.log(User.create({nombreApellido : 'prueba', email : 'prueba@gmail.com'}))

// BORRA SEGUN ID
//console.log(User.delete(1))

