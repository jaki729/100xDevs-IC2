const express = require('express');
const app = express();

// function to check if age is more that 14 or not
function isoldEnoughMiddleware(req,res,next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    } else {
        res.json({
            msg: "Not eligible for ride"
        })
    }
}

app.use(isoldEnoughMiddleware);
app.get('/ride1', function (req,res) {
        res.json({
            msg: "You have successfully riden the ride 1"
        });
});

// function ticketchecker(req,res,next) {
//     const ticket = req.query.ticket;
//     if(ticket=="free") {
//         next(); // allow the request to continue to the next middleware function
//     } else{
//         res.status(403).send("Access denied");
//     }
// }

// app.use(ticketchecker);

// app.get("/ride1", function() {
//     res.send("Your rode first ride!");
// });

// app.get("/ride2", function() {
//     res.send("Your rode second ride!");
// });

// app.get("/ride3", function() {
//     res.send("Your rode third ride!");
// });

app.listen(3006);