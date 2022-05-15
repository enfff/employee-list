const { MongoClient } = require("mongodb");

// const database = process.env.ATLAS_URI;

// const client = new MongoClient(database, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

let dbConnection

module.exports = {
    connectToServer: (callback) => {
        // MongoClient.connect(process.env.DB_CONNECTION)
        MongoClient.connect(process.env.ATLAS_URI, { useUnifiedTopology: true })
            .then(client => {
                dbConnection = client.db()
                return callback()
            })
            .catch(err => {
                console.log(err)
                return callback(err)
            })
    },

    getDb: () => dbConnection
};