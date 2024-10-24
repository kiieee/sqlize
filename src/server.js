require("dotenv").config();
const Book = require("./db/models/bookModel");
const express = require("express");
const app = express();
const bookRouter = require('./db/routes/bookRouters')

function syncTables() {
    Book.sync({
        alter:true
    })
}

app.use(express.json())
app.use(bookRouter);





app.get("/health", (req, res) => {
    res.status(200).send("api is healthy")
});


syncTables();
app.listen(5001, () => {console.log("Server is listening on port 5001!")})