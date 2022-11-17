const fs = require("fs");

const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models");



const userApi = {
  
  allUsers: (req, res) => {
    db.User.findAll({
      attributes: ["user_id", "fullName", "email"]
    })
    
    .then(users =>{
     for  (let i = 0;i<users.length;i++){
       users[i].setDataValue("detail","http://localhost:3020/api/users/profile/" + users[i].user_id)
     }
      res.status(200).json({
        count:users.length,
        users:users,
        status:200
      })
    }).catch(error => res.json(error));
  },


  profile: (req, res) => {
    db.User.findByPk(parseInt(req.params.id, 10))
      .then((userP) => {
        res.status(200).json({
          id: userP.user_id,
          name: userP.fullName,
          username: userP.userName,
          email: userP.email,
          country: userP.country,
          avatar: "http://localhost:3020/images/avatars/" + userP.avatar,
        });
      })
      .catch((error) => console.error(error));
  },
};
module.exports = userApi;
