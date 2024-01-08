const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port=3001
app.use(bodyParser.json());

app.post('/conversations', (req, res) => {
    const message = req.body.message;
    console.log(message);
    res.json({
        "success": true,
    })
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
