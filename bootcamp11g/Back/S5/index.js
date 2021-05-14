// const fs = require('fs');
// const express = require('express');
// const server = express();

// server.use(express.json())

// server.use()

// // server.get('/koders/:id', (request, response) => {
// //     const id = parseInt(request.params.id);
// //     let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

// //     const newKoders = allKoders.koders.reduce((koders, koderActual)=>{
// //         if(id == koderActual.id){
// //            koders = [
// //             ...koders,
// //             koderActual
// //         ]
// //         }
// //         return koders
// //     }, [])

// //     response.status(201);
// //     response.json(newKoders)
// // })


// server.get('/koders',async (request, response) => {
//     const genderFilter = request.query
//     let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

//     console.log(genderFilter)
//     response.status(201);
//     response.json(newKoders)
// })


// server.delete('/koders/:id', (request, response) => {
    
//     const id = parseInt(request.params.id);
//     let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

//     let newKoders = allKoders.koders.filter(koder => koder.id !== id)

//     allKoders.koders = newKoders


//     fs.writeFileSync('koders.json', JSON.stringify(allKoders, null, 2))
//     response.status(201);
//     response.json({
//         message: 'ok'
//     })
// });



/****************************** ROUTERS *************************/
const express = require('express')

const mentorsRouter = require('./routers/mentors')

const server = express()

// middleware
server.use(express.json())
server.use('/mentores', mentorsRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: '11G APIv1'
  })
})


server.listen(8080, () => {
    console.log('Server listening in port 8080')
})