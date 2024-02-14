const express = require('express')
const router = express.Router()

const { registerUser,
        getAllUser,
        getUser,
        removeUser, 
        updateUser,
        loginUser} = require('../controllers/tasks')

router.route('/').get(getAllUser)
router.route('/register').post(registerUser)
router.route('/:id').get(getUser).delete(removeUser).patch(updateUser)
router.route('/login').post(loginUser)

module.exports = router