const Book = require("../models/bookModel");
 
async function deleteBook(req,res) {
    try {
        await Book.destroy ({where: {title: req.query.title}, })
               
            res.status(200).json({message: `Book ${req.query.title} has been removed!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = deleteBook;