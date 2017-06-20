var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = require('../app/models/book.js')

exports.postBook =function(req, res) {
	    var book = new Book();
	    book.title = req.body.title;
	    book.author = req.body.author;
	    book.year = req.body.year;
	    book.pages = req.body.pages;
	    book.createAt = req.body.create;
    
	    book.save(function(err) {
	        if (err)
	            res.send(err);
	        res.json({ message: 'Book created!' });
	    });
		
	}
	
	exports.getBooks = function(req, res) {
	   Book.find(function(err, book) {
	        if (err)
	            res.send(err);
	        res.json(book);
	    });
	}
		
	exports.deleteBooks = function(req, res) {
	    Book.remove({
	        _id: req.params.book_id
	    }, function(err, place) {
	        if (err)
	            res.send(err);
	        res.json({ message: 'Successfully deleted' });
	    })
	}
	
	exports.findBooks =function(req,res){
		Book.findById (req.params.book_id
			, function(err,book){
			if(err)
				res.rend(err);
			res.json(book);
		});
	
	}

		
	exports.updateBooks = function(req,res) {
		Book.findById (req.params.book_id,function(err,book){
	    book.title = req.body.title;
	    book.author = req.body.author;
	    book.year = req.body.year;
	    book.pages = req.body.pages;
	   
		
	    book.save(function(err) {
	        if (err)
	            res.send(err);
	        res.json({ message: 'Book update' });
	    })
	})
}