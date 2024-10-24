const Book = require("../models/bookModel");
 
async function bookDetails(req,res) {
    try {
       await Book.findbypk();
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
       
    }
}
 
module.exports = bookDetails;