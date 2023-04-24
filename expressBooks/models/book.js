const{ schema, model } = require('mongoose')

const booksSchema = new Schema({
    title: String,
    description: String,
    image: String,
    year: String,
    author: String,
    savebook: Boolean,
    ibcnumber: String
})
const Book = model("Book", booksSchema);

module.exports = Book;
