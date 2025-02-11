const express = require("express");
const { getBooks, addBook, updateBook, deleteBook } = require("../controllers/bookController");

const router = express.Router();

router.get("/", getBooks);      // Fetch all books
router.post("/", addBook);      // Add a new book
router.put("/:id", updateBook); // Update book by ID
router.delete("/:id", deleteBook); // Delete book by ID

module.exports = router;
