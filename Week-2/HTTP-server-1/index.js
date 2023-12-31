// Create the http server
const express = require('express')
const app = express()
const port=3000
app.get('/',function(req,res) {
    res.send('Hello World!')
})
app.listen(port,function() {
    console.log(`Example app listening on port ${port}`)
})

// Practice
// create a todo app that lets users store todos on the server
// create a http server from starctch in c
// create a http server in rust using actix-web
// create a http server in golang using gurrila framework
