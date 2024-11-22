import React from 'react';
import axios from '../utils/axios';

const BookTable = ({ books, fetchBooks }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>S. No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Year</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.year}</td>
            <td>{book.isbn}</td>
            <td>
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
