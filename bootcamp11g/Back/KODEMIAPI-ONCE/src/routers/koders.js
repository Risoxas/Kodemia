const express = require('express')
const router = express.Router()
const koders = require('../usecases/koders')

router.get('/', async (request, response) => {
    try {
        const allKoders = await koders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status(400)
        response.jason({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    console.log("en routers", request.body)
    try {
        const dbData = request.body
        const newKoder = await koders.postKoder(dbData)
        response.json({
            success: true,
            message: 'New koder added',
            data: {
                koder: newKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create koders',
            error: error.message
        })
    }
})

router.delete('/:id', async (request,response) => {
    try{
        const idKoder = request.params.id
        const deletedKoder = await koders.deleteKoder(idKoder)
        response.json({
            succes: true,
            message: 'Koder removed',
            data: {
                koder: deletedKoder
            }
        })
    } catch(error){
        response.status(400)
        rseponse.json({
            succes: false,
            message: 'Error at delete koder',
            error: error.message
        })
    }
})

module.exports = router