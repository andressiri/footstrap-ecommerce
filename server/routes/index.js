// @/api/v1
const express = require('express');
const router = express.Router();

router.use('/users', require('./usersRouter'));

router.use('/products', require('./productsRouter'));

router.use('/brands', require('./brandsRouter'));

module.exports = router;
