const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

router.get('/', bookController.getIndexBook);

/* untuk menerima data buku */
router.get('/', bookController.getBook);

/* untuk mengirim data */
router.post('/add', bookController.postBook);

/* untuk mengambil data */
router.post('/edit/:id', bookController.putBook);

/* untuk menghapus buku */
//router.delete('/delete/:id', bookController.deleteBook);
router.post('/delete/:id', bookController.deleteBook);

//*Untuk Lihat semua List Buku */
router.get('/list',bookController.getList);

module.exports = router;