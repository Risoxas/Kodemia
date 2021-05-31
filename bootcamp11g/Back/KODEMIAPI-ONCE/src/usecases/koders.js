const Koders = require('../models/koders')

function getAll() {
    return Koders.find({})
}

function postKoder(koder) {
    return Koders.create(koder)
}

function deleteKoder(id) {
    return Koders.findByIdAndDelete(id)
}

function updateById (id, dataToUpdate){
    return Koders.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll,
    postKoder,
    deleteKoder,
    updateById
}