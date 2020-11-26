const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String
    },
    genre: {
        type: String
    },
    authorID: {
        type: String
    }
})

const books = mongoose.model('book', bookSchema)
module.exports = books