const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll() {
    return Users.find()
}

function getById(id){
    return Users.findById(id)
}

async function signUp({ name, email, password, role }) {

    const userFound = await Users.findOne({ email })

    if (userFound) {
        throw new Error('User already exists')
    }
    const encryptedPassword = await bcrypt.hash(password)

    return Users.create({
        name,
        email,
        password: encryptedPassword,
        role,
    })
}

async function login(email, password) {
    const userFound = await Users.findOne({ email })

    if (!userFound) {
        throw new Error('User doesn\'t exist')
    }
    const isValidPassword = await bcrypt.compare(password, userFound.password)

    if (!isValidPassword) {
        throw new Error('Password doesn\'t match')
    }

    return jwt.sign({ id: userFound._id })
}

module.exports = {
    getAll,
    signUp,
    login,
    getById
}