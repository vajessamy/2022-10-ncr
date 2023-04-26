const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');


// GET /api/orders/history
router.get('/favorites', booksCtrl.);
// POST /api/orders/cart/items/:id
router.post('/favorite/isbn/:id', favoriteCtrl.addTofavorite);

// POST /api/orders/cart/qty
router.put('/search/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;