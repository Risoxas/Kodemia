const server = require ('./src/server')
const dbConnect = require('./src/lib/db')



dbConnect()
    .then(() => {
        console.log('DB Connected')
        server.listen(8080, () => {
            console.log('Server is listening')
        })    
    })
    .catch(error => {
        console.error('DB Connect Error: ', error)
    })

    // GET /koders
    // 1. crear (o asegurarse que exista) el Modelo necesario
    // 2. crear el caso de uso necesario
    // 3. crear el endpoint necesario