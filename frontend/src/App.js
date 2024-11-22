import React, { useState } from 'react';
import axios from './utils/axios';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import BookCards from './components/BookCards';

const App = () => {
  const [books, setBooks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchBooks = async () => {
    const { data } = await axios.get('/books');
    setBooks(data);
  };

  return (
    <div className="app-container">
      <h1>Book Donation Application</h1>
      {isAuthenticated ? (
        <>
          <BookForm fetchBooks={fetchBooks} />
          <BookTable books={books} fetchBooks={fetchBooks} />
        </>
      ) : (
        <BookCards books={books} fetchBooks={fetchBooks} />
      )}
    </div>
  );
};

export default App;
