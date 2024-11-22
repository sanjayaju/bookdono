import React, { useState } from 'react';
import axios from '../utils/axios';

const BookForm = ({ fetchBooks }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    isbn: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/books', formData);
      fetchBooks();
      setFormData({
        title: '',
        author: '',
        genre: '',
        year: '',
        isbn: '',
        imageUrl: '',
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={formData.isbn}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="imageUrl"
        placeholder="Book Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
