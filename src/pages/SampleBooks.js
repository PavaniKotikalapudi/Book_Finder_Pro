import React, { useEffect, useState } from 'react';

import axios from 'axios';

function SampleBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fetch books data from the Google Books API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=sample'); // You can modify the query
        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Handle the book selection from the dropdown
  const handleSelectBook = (e) => {
    const bookId = e.target.value;
    const selected = books.find((book) => book.id === bookId);
    setSelectedBook(selected);
  };

  return (
    <div className='bg'>
    <div className="sample-books">
      <h2>Select a Book</h2>
      <select onChange={handleSelectBook} defaultValue="">
        <option value="">-- Select a Book --</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.volumeInfo.title}
          </option>
        ))}
      </select>

      {/* Display selected book details */}
      {selectedBook && (
        <div className="book-details">
          <h3>{selectedBook.volumeInfo.title}</h3>
          <p>{selectedBook.volumeInfo.description || 'No description available.'}</p>
          <a href={selectedBook.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
      )}
    </div>
    </div>
  );
}

export default SampleBooks;
