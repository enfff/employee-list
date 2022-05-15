const express = require("express")
const cors = require("cors")
const app = express()

// const { ObjectId } = require('mongodb')

require("dotenv").config()

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// get driver connection
const dbo = require("./database");

app.listen(port, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err);
    });

    console.log(`Server is running on port: ${port}`);
});