const express = require('express');
const port = 3001;

function calculateSum(n) {
    n = parseInt(n);
    if (isNaN(n)) {
        return 'Invalid input. Please provide a valid number.';
    }

    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

const app = express();

app.get('/', function (req, res) {
    const n = req.query.n;
    console.log('Received n: ', n);
    const ans = calculateSum(n);
    res.send(ans.toString()); // Convert the result to a string before sending it in the response
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



// Example sample server
// const express = require('express')
// const bodyParser = require("body-parser");
// const app = express()
// const port=3001
// app.use(bodyParser.json());

// app.post('/conversations', (req, res) => {
//     const message = req.body.message;
//     console.log(message);
//     res.json({
//         "success": true,
//     })
// })

// app.listen(port,() => {
//     console.log(`Example app listening on port ${port}`)
// })
