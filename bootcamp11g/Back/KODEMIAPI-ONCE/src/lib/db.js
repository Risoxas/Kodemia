const mongoose = require('mongoose')

const DB_USER = 'David'
const DB_PASSWORD = 'Kodemia123'
const DB_HOST = 'kodemia-david.8p0j4.mongodb.net'
const DB_NAME = 'Kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// const url = 'mongodb+srv://David:Kodemia123@kodemia-david.8p0j4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

function connect () {
   return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology : true})
}

module.exports = connect