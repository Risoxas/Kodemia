const mongoose = require('mongoose')

const {
   DB_USER,
   DB_PASSWORD,
   DB_HOST,
   DB_NAME
} = process.env



const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// const url = 'mongodb+srv://David:Kodemia123@kodemia-david.8p0j4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

function connect() {
   return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connect