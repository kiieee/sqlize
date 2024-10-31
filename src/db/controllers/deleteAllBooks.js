const Book = require("../models/bookModel");
 
async function deleteAllBooks(req,res) {
    try {
        await Book.destroy ({where: {}, truncate: true})
               
            res.status(200).json({message: `Books have been removed!`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = deleteAllBooks;