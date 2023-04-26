const Book = require('../../models/book');
// const Item = require('../../models/item');

module.exports = {
    book,
    description,
    image,
    year,
    author,
    savebook,
    isbn,
    category,
    email

//   cart,
//   addToCart,
//   setItemQtyInCart,
//   checkout,
//   history
};

// A cart is the unpaid order for a user
async function favorite(req, res) {
  try{
    const favorite = await Books.getFavorites(req.user._id);
    res.status(200).json(favorite);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

// Add an item to the cart
async function addToFavorite(req, res) {
  try{
    const favorite = await Book.getFavorites(req.user._id);
    await favorite.addBookToFavorite(req.params.id);
    res.status(200).json(favorite);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}


// Return the logged in user's paid order history
async function favorite(req, res) {
  // Sort most recent orders first
  try{
    const books = await Book
      .find({ user: req.user._id })
      res.status(200).json(books);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }

}

/* Helper Functions */

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );}