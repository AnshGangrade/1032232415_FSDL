const express = require('express');
const app = express();

app.use(express.json());

let books = [];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST add new book
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.json({
        message: "Book added successfully",
        book: book
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});