const express = require('express');
const router = require('./routes/aiRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("server working fine")
})
app.use('/ai',router);
module.exports = app;