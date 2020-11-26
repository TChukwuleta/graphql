const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const authors = mongoose.model('author', authorSchema)

module.exports = authors