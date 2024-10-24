const Book = require("../models/bookModel");
 
async function addBook(req,res) {
    try {
       await Book.create(
        {
            title :req.body.title,
            author :req.body.author,
            genre :req.body.genre
        }
       )

       res.status(200).json({message: `Book ${req.body.title} has been added!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = addBook;