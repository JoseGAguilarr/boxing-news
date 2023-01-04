const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection

db.on('connected', function () {
    console.log(`connected to MongoDb at ${db.host}${db.port}`)
})