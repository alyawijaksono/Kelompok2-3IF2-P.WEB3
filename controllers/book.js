const Book = require('../models/book');

/* view list book */
module.exports.getIndexBook = (req, res) => {
	Book
		.findAll({
			attributes: ['title', 'desc', 'price', 'size', 'writer', 'publisher', 'page', 'year_of_publish', 'isbn', 'category']
		})
}

/* create new book */
module.exports.postBook = (req, res) => {
	Book.create({
		
		title: "Buku Komputer",
		desc: "Ini deskripsi",
		price: 50000,
		size: "21x15cm",
		writer: "Alya Ainun",
		publisher: "Elex Media Komputindo",
		page: "300",
		year_of_publish: 2016,
		isbn: 123456,
		category: "Computer"
		
	}).then((book) => {
		res.json(book);
	}).catch((error) => {
		throw error;
	})
}

/* for put data of book */
module.exports.putBook = (req, res) => {
	let values = {
		title: req.body.title,
		desc: req.body.desc,
		price: req.body.price,
		size: req.body.size,
		writer: req.body.writer,
		publisher: req.body.publisher,
		page: req.body.page,
		year_of_publish: req.body.year_of_publish,
		isbn: req.body.isbn,
		category: req.body.category
	}
	
	Book
		.update(values, {
			where: {
				id: req.params.id
			}
		})
		.then((book) => {
			res.json(book);
		}).catch((error) => {
			throw error;
		})
}

/* delete the book */
module.exports.deleteBook = (req, res) => {
	let conditions = {
		where : {
			id : req.params.id
		}
	}
	
	Book
		.destroy(conditions)
		.then((book) => {
			res.json(book);
		}).catch((error) => {
			throw error;
		})
}

/* view one book by id*/
module.exports.getBook = (req, res) => {
	Book
		.findOne({
			where : {
				id : req.params.id
			}
		})
		.then((book) => {
			res.json(book);
		})
		.catch((error) => {
			throw error;
		})
}