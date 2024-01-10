// A website wich has 2 endpoints 
// POST /signin 
// body-{
//     username: string,
//     password: string
// }
// Returns a JWT with username MediaEncrypted
// GET /users 
// Headers- Authorization Headers
// Returns a array of all users if user is signed in (token is correct)
// Return 403 status code if not

const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpasswd = "123456";
const app = express();
app.use(express.json())
// in memory database
 const ALL_USERS =[
    {
        username: "jakiur@gfd.com",
        password: "123",
        name: "jakiur",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
      },
      {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
      },
 ];
 function userExists(username,password) {
    // logic to return true or false if this user exists in ALL_USERS array
    let userExists = false;
    for (let i = 0; i<ALL_USERS.length; i++) {
        if (ALL_USERS[i].username==username && ALL_USERS[i].password==password) {
            userExists=true;
        }
    }
    return userExists;
 }

 app.post("/signin",function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username,password)) {
        return res.status(403).json({
            msg: "user doesnot exits in our memory db",
        });
    }
    var token = jwt.sign({username:username},jwtpasswd);
    return res.json({
        token,
    });
 });
 
 app.get("/users", function(req,res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtpasswd);
        const username = decoded.username;
        return res.json({
            users: ALL_USERS.filter(function(value) {
                if(value.username==username){
                    return false;
                }else{
                    return true;
                }
            })
        });
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3004)