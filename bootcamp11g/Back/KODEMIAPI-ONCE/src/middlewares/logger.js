function logger(request, response, next){
    console.log(`${request.method} ${request.url} ${request.body}`)
    next()
}

module.exports = logger