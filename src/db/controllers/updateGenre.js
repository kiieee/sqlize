const Book = require("../models/bookModel");
 
async function updateGenre(req,res) {
    try {
        await Book.update(
         {
             genre: req.body.genre
         },
         { where: {
             title: req.query.title
         },
         }
        )
        res.status(200).json({message: `Book with title ${req.query.title} has been updated and the genre is now ${req.body.genre}!`});
     } catch (error) {
         console.log(error);
         res.status(500).json(error);
     }
}
 
module.exports = updateGenre;