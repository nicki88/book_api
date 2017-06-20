var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

var Book = require('./app/models/book.js'); 
var bookController=require ('./controllers/book.js')

var mongoose = require('mongoose');
mongoose.connect('mongodb://Nicki:n800829@ds157971.mlab.com:57971/bac')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080; // set our porta

var router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our book store!' });
})

router.route('/book')
.post(bookController.postBook)
.get(bookController.getBooks)

router.route('/book/:book_id')
.delete(bookController.deleteBooks)
.get(bookController.findBooks)
.post(bookController.updateBooks)

app.use('/', router);
app.listen(port);
console.log('Magic happens on port ' + port);