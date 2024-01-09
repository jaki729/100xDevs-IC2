// Middlewares
const { json } = require('body-parser');
const express = require('express');
const app1 = express();

function usermiddleware(req,res,next) {
    if(username != "jakiur" && password != "pass") {
        res.status(403),json({
            mgs: "Incorrect inputs",
        });
    } else{
        next();
    }
};

function kidneymiddleware(req,res,next) {
    if(kidneyid != 1 && kidneyid != 2) {
        res.status(411).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};
app1.get('/health-checkup', usermiddleware, kidneymiddleware,function(req, res) {
    // do something wioth kidney here
    res.send("Yout heart is healty");    
});

app1.get('/kidney-checkup', usermiddleware, kidneymiddleware,function(req, res) {
    // do something wioth kidney here
    res.send("Yout heart is healty");    
});

app1.get('/heart-checkup', usermiddleware,function(req, res) {
    // do something wioth kidney here
    res.send("Yout heart is healty");    
});

app1.listen(3003);

// input validation

// Without error handling middleware
const express = require('express');
const app2 = express();
app2.post('/health-checkup', function(req,res) {
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("your kidney length is " + kidneyLength);
});
app2.listen(3003);

// with error handling middleware
const express = require('express');
const app3 = express();
app3.post('/health-checkup', function(req,res) {
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("your kidney length is " + kidneyLength);
});
app3.use((error, req, res, next) => {
    // log the error console.error(error);
    res.status(500).send('An internal server error occured');
});
app3.listen(3003);

// global catches Error handling middleware
const express = require('express');
const app4 = express();
app.use(express.json());  // to parse incoming requests with JSON payloads
app4.post("/health-checkup", function(req, res) {
        const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("your kidney length is " + kidneyLength);
});
app4.use(function(err,req,next) {
    res.json({
        msg: "!!!!!Something is up with our server"
    })
})
app4.listen(3003);

// Zod for schema declaration and input validation
const express = require('express');
const { z } = require('zod');

const app5 = express();

const userSchema = z.object({
    email: z.string().email(), // Validate email format
    password: z.string().min(8), // Ensure password is at least 8 characters long
    country: z.string().literal("IN").or(z.string().literal("US")), // Allow only "IN" or "US"
    kidney: z.array(z.number()) // Validate an array of numbers for "kidney"
});

app5.use(express.json());
app5.post("/health-checkup", function(req, res) {
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney)
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else{
        res.send({
            response
        })
    }
});
app5.listen(3003);
