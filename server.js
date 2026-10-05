const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" },
  { id: 3, title: "Clean Code", author: "Robert C. Martin" }
];

app.get("/", (req, res) => {
  res.json({
    message: "Books REST API is running",
    endpoints: {
      getBooks: "GET /books",
      getBook: "GET /books/:id",
      createBook: "POST /books",
      updateBook: "PUT /books/:id",
      deleteBook: "DELETE /books/:id"
    }
  });
});

app.get("/books", (req, res) => res.status(200).json(books));

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(book => book.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ message: "Title and author are required" });
  const newBook = {
    id: books.length ? Math.max(...books.map(book => book.id)) + 1 : 1,
    title: title.trim(),
    author: author.trim()
  };
  books.push(newBook);
  res.status(201).json({ message: "Book created successfully", book: newBook });
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ message: "Title and author are required" });
  books[index] = { id, title: title.trim(), author: author.trim() };
  res.status(200).json({ message: "Book updated successfully", book: books[index] });
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  const deletedBook = books.splice(index, 1)[0];
  res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
});

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(PORT, () => console.log(`Books REST API running at http://localhost:${PORT}`));
