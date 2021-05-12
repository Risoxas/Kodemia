const express = require('express')
const server = express()

// middleware
server.use(express.json())

server.get('/koders',(request,response) => {
    // response.write('Aqui estan todos los koders')
    // response.end()
    response.status(501)
    response.json({ message: 'Aqui la lista de koders'})
})

server.post('/koders',(request, response) => {
    // response.write('Aqui puedes crear koders')
    // response.end()
    console.log('body: ', request.body.name)
    response.json({
        message: 'ok'
    })
})

server.put('/koders',(request, response) => {
    response.write('Aqui puedes sustituir un koder')
    response.end()
})
server.listen(8080, () => {
    console.log('Server listening in port 8080')
})