// Require's
const express = require('express')
const router = express.Router()

// Controller require
const userApi = require('../../controllers/Api/userApi')

// All users  http://localhost:3020/api/users
router.get('/',userApi.allUsers);

// Detail user  http://localhost:3020/api/users/profile/:id
router.get('/profile/:id', userApi.profile)

module.exports = router





