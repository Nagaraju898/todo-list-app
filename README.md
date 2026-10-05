# Books REST API

A simple REST API for managing books using Node.js and Express.js. Books are stored in memory, so no database is required.

## Features
- GET all books
- GET one book by ID
- POST a new book
- PUT/update a book
- DELETE a book
- JSON request/response handling
- Basic validation and error handling

## Technologies
- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Postman

## Project Structure
```text
books-rest-api/
├── package.json
├── server.js
├── README.md
└── .gitignore
```

## Installation
```bash
npm install
```

## Run
```bash
npm start
```
Server: `http://localhost:3000`

Development mode:
```bash
npm run dev
```

## Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get one book |
| POST | `/books` | Create a book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## POST /books
Body:
```json
{
  "title": "JavaScript: The Good Parts",
  "author": "Douglas Crockford"
}
```

## PUT /books/1
Body:
```json
{
  "title": "The Alchemist - Updated",
  "author": "Paulo Coelho"
}
```

## Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found

## Testing
Start the server and test the endpoints in Postman. For POST/PUT use **Body → raw → JSON**.

## Note
Data is stored in an in-memory array. Restarting the server resets the data.
