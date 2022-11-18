const fs = require("fs");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../../database/models");

const userApi = {
  allUsers: (req, res) => {
    db.User.findAll({
      attributes: ["user_id", "fullName", "email"],
    })
      .then((users) => {
        for (let i = 0; i < users.length; i++) {
          users[i].setDataValue(
            "detail",
            `http://localhost:${process.env.PORT}/api/users/profile/${users[i].user_id}`
          );
        }

        let response = {
          count: users.length,
          users: users,
          status: 200,
        };

        res.status(200).json(response);
      })
      .catch((error) => res.json(error));
  },

  profile: (req, res) => {
    db.User.findByPk(parseInt(req.params.id, 10))
      .then((user) => {
        let response = {
          id: user.user_id,
          name: user.fullName,
          username: user.userName,
          email: user.email,
          country: user.country,
          avatar: `http://localhost:${process.env.PORT}/images/avatars/${user.avatar}`,
        };
        res.status(200).json(response);
      })
      .catch((error) => console.error(error));
  },
};
module.exports = userApi;
