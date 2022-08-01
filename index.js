const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const routes = require("./routes/index");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/',routes);

const uri = process.env.URI;

// useCreateIndex:true,
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true},(err) => console.log("MongoDB Connected!!!", err))

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server is running on Port:", port );
})