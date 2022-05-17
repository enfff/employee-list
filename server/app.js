const express = require("express")
const cors = require("cors")

const { getDb, connectToDb } = require('./db')
const { ObjectId } = require('mongodb')

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors());

// setting up routes
// app.use(require("./Routes/Users"));

// db connection
let db

connectToDb((err) => {
    if (!err) {
        app.listen(process.env.PORT, () => {
            console.log(`app listening on port ${process.env.PORT}`)
        })

        db = getDb()
    } else {
        console.log('error connecting to database: ' + err)
    }

})

// Routes

app.get('/users', (req, res) => {
    // fetches all users from database

    // uncommenting will load a "page" of users
    // const page = req.query.p || 0
    // const usersPerPage = 3

    let users = []

    db.collection('users')
        .find()
        .sort({ author: 1 })
        // .skip(page * usersPerPage)
        // .limit(usersPerPage)
        .forEach(user => users.push(user))
        .then(() => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

app.post('/users', (req, res) => {
    const user = req.body

    db.collection('users')
        .insertOne(user)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not post document' })
        })
})