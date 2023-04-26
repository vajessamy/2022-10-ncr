const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book: String,
    description: String,
    image: String,
    year: String,
    author: String,
    savebook: Boolean,
    isbn: String,
    category: String,
    user: {
        type: Schema.Types.ObjectId, ref: 'User'},
        // unique: true,
        // trim: true,
        // lowercase: true,
        // required: true
         timestamps: true,
         toJSON: { virtuals: true }

     });

    bookSchema.statics.getFavorites = function(userId) {
        // 'this' is the Order model
        return this.findOneAndUpdate(
          // query
          { user: userId},
          // update
          { user: userId },
          // upsert option will create the doc if
          // it doesn't exist
          { upsert: true, new: true }
        );
      };
      
      bookSchema.methods.addBookToFavorite = async function(itemId) {
        const favorite = this;
        // Check if item already in cart
        const isbn = favorite.isbn.find(isbn => favorite.equals(itemId));
        if (isbn) {
          
        } else {
          const isbn = await mongoose.model('ISBN').findById(itemId);
          favorite.push({ isbn });
        }
        return favorite.save();
      };
module.exports = mongoose.model("Book", bookSchema)
