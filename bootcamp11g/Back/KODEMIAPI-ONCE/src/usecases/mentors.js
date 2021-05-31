const Mentors = require('../models/mentors')

function getAll() {
    return Mentors.find({})
}

function postMentor(mentor) {
    return Mentors.create(mentor)
}

function deleteMentor(id) {
    return Mentors.findByIdAndDelete(id)
}

function updateById (id, dataToUpdate){
    return Mentors.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll,
    postMentor,
    deleteMentor,
    updateById
}