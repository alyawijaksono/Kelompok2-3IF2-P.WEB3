const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

/* untuk mengirim data */
router.post('/add', bookController.postBook);

/* untuk mengambil data */
router.post('/edit/:id', bookController.putBook);

/* untuk menghapus buku */
router.post('/delete/:id', bookController.deleteBook);

//*Untuk Lihat semua List Buku */
router.get('/list',bookController.getList);

/*untuk lihat satu buku*/
router.get('/detail/:id', bookController.getDetail);

module.exports = router;