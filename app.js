const express = require('express')
const app = express();
const Permissions = true;
const logger = require('./Utility/logger')



app.use((request,respons,next) => {
    logger.info('this is information logs');
    logger.error('this is error logs');
    logger.warn('this is warn logs');
    next()
})



app.get("/books",(request , respons , next) => {
    console.log("this is books")
    respons.send("server is running")
})

let librariesOrigin = ['http://localhost:2008/libraries'];
let authorOrigin = ['http://localhost:2008/author']

const checkPermission = (request,respons,next) => {

    if(librariesOrigin){
        libraries()
    }

    if(authorOrigin){
        author()
    }

    if(!authorOrigin || !librariesOrigin){
        callback(new Error("origin not allowed"))
    }
}

libraries = app.get("/libraries",(request , respons , next) => {
    console.log("this is libraries")
    respons.send('Permissions' + " : " + Permissions)
})

author = app.get("/author",(request , respons , next) => {
    console.log("this is authors")
    respons.send('Permissions' + " : " + Permissions)
})


module.exports = app;