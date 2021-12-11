// Require's
const express = require('express')
const router = express.Router()

// Controller require
const userApi = require('../../controllers/Api/userApi')

/* Trae todos los usuarios  http://localhost:3020/api/users */
router.get('/',userApi.allUsers);


/* Trae un usuario  http://localhost:3020/api/users/profile/:id */
router.get('/profile/:id',userApi.profile)
module.exports = router





