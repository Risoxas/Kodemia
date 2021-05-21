const Koders = require('../models/koders')

function getAll() {
    return Koders.find({})
}

function postKoder(koder) {
    console.log("en usecases", koder)
    return Koders.create(koder)
}

function deleteKoder(koderid) {
    return Koders.findByIdAndDelete(koderid)
}

module.exports = {
    getAll,
    postKoder,
    deleteKoder
}