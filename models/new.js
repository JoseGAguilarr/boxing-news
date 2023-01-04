const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newSchema = new Schema({
    title: String,
    Date: Number,
    comment: String
})
module.exports = mongoose.model('New', newSchema)