const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./Routes/routes")
const port = 4000;
const app = express();



const {MONGO_URL} = process.env;
mongoose.connect(MONGO_URL)

.then(()=> console.log('databse connected'))
.catch((error) => console.log("error"))


app.use(express.json());
app.use('/api' ,routes) 

app.get("/" , (req, res )=> {
    res.send("welcome")
});

app.listen(port , () => {
    console.log("server started")
})