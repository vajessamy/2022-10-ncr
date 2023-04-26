const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: String,
    description: String,
    image: String,
    year: String,
    author: String,
    savebook: Boolean,
    isbn: String,
    category: String,
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    }, 
         timestamps: true
     });

module.exports = mongoose.model("Book", booksSchema)
