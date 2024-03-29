const express = require('express')
const koders = require('../usecases/koders')
const authMiddlewares = require('../middlewares/auth')

const router = express.Router()


router.get('/', authMiddlewares.auth, async (request, response) => {
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

router.post('/',authMiddlewares.authRoles(['admin']), async (request, response) => {
    try {
        const newKoder = await koders.postKoder(request.body)
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

router.delete('/:id', authMiddlewares.authRoles(['admin']) ,async (request,response) => {
    try{
        const { id } = request.params
        const deletedKoder = await koders.deleteKoder(id)
        response.json({
            succes: true,
            message: 'Koder removed',
            data: {
                koder: deletedKoder
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete koder',
            error: error.message
        })
    }
})


router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const updatedKoder = await koders.updateById(id, request.body)
        response.json({
            succes: true,
            message: 'Koder actualizado',
            data: {
                koder: updatedKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at patch koder',
            error: error.message
        })
        
    }
})
module.exports = router