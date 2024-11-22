import React, { useEffect } from 'react';

const BookCards = ({ books, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-cards">
      {books.map((book) => (
        <div className="card" key={book._id}>
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <p>{book.year}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCards;
