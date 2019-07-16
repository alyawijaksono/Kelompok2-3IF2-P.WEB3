const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

router.get('/', bookController.getIndexBook);

/* untuk menerima data buku */
router.get('/', bookController.getBook);

/* untuk mengirim data */
router.post('/add', bookController.postBook);

/* untuk mengambil data */
router.put('/:id', bookController.putBook);

/* untuk menghapus buku */
router.delete('/:id', bookController.deleteBook);

module.exports = router;