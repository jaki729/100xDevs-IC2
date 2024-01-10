const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("<connectionURL>/userappnew");

const User = mongoose.model('Users', { name: String, email: String,
                password: String });
const user = new User({ name: 'Jakiur Rahman', email: "jack@sparow.com",
                password: "123456" });


app.post('/signup', async function(req,res) {
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;
    
    const exsitingUser = await User.findOne({email: username});
    if(exsitingUser) {
        return res.status(400).send("User already exists");
    }
    const user = new User({
        name : name ,
        email : username  ,
        password : password
    });
    user.save();
    res.json({
        "msg": "User created successfully"
    })
})

app.listen(3005);
