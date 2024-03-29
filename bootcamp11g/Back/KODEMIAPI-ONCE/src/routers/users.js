const express = require('express')
const users = require('../usecases/users')

const router = express.Router()

router.post('/', async (request, response) => {
    try {
        const newUser = await users.signUp(request.body)

        response.json({
            succes: true,
            messsage: 'User registered',
            data: {
                user: newUser
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})

router.get('/', async (request, response) => {

    try {
        const allUsers = await users.getAll()

        response.json({
            success: true,
            message: 'All users',
            data: {
                users: allUsers
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get users',
            error: error.message
        })
    }
})

router.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body
        const token = await users.login(email, password)

        response.json({
            success: true,
            message: 'Logged in',
            data: {
                token
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not login',
            error: error.message
        })
    }
})

module.exports = router