// const Book = require('../../models/book');
// // const Item = require('../../models/item');

// module.exports = {
//     title,
//     description,
//     image,
//     year,
//     author,
//     savebook,
//     isbn,
//     category,
//     email

//   cart,
//   addToCart,
//   setItemQtyInCart,
//   checkout,
//   history
// };

// // A cart is the unpaid order for a user
// async function title(req, res) {
//   try{
//     const title = await Book.getTitle(req.user._id);
//     res.status(200).json(title);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }
// }

// // Add an item to the cart
// async function addTo(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     await cart.addItemToCart(req.params.id);
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }



// // Update the cart's isPaid property to true
// async function checkout(req, res) {
//   try{
//     const cart = await Order.getCart(req.user._id);
//     cart.isPaid = true;
//     await cart.save();
//     res.status(200).json(cart);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }

// // Return the logged in user's paid order history
// async function history(req, res) {
//   // Sort most recent orders first
//   try{
//     const orders = await Order
//       .find({ user: req.user._id })
//       .sort('-updatedAt').exec();
//     res.status(200).json(orders);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }

// }
