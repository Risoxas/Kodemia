const express = require('express')
const router = express.Router()
const mentors = require('../usecases/mentors')

router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getAll()

        response.json({
            success: true,
            message: 'All mentors',
            data: {
                mentors: allMentors
            }
        })
    } catch (error) {
        response.status(400)
        response.jason({
            success: false,
            message: 'Error at get all mentors',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const newMentor = await mentors.postMentor(request.body)
        response.json({
            success: true,
            message: 'New mentor added',
            data: {
                mentor: newMentor
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at create mentors',
            error: error.message
        })
    }
})

router.delete('/:id', async (request,response) => {
    try{
        const { id } = request.params
        const deletedMentor = await mentors.deleteMentor(id)
        response.json({
            succes: true,
            message: 'Mentor removed',
            data: {
                mentor: deletedMentor
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete mentor',
            error: error.message
        })
    }
})


router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const updatedMentor = await mentors.updateById(id, request.body)
        response.json({
            succes: true,
            message: 'Mentor actualizado',
            data: {
                mentor: updatedMentor
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at patch mentor',
            error: error.message
        })
        
    }
})
module.exports = router