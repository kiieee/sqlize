const Book = require("../models/bookModel");
 
async function updateAuthor(req,res) {
    try {
       await Book.update(
        {
            author: req.body.author
        },
        { where: {
            title: req.query.title
        },
        }
       )
       res.status(200).json({message: `Book with title ${req.query.title} has been updated and the author is now ${req.body.author}!`});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 
module.exports = updateAuthor;