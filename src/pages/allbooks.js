import './allbooks.css';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(''); // Default search term
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks(search);
  }, [search]);

  const fetchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg'>
    <div className="all-books">
      <h2>All Books</h2>
      <input
        type="text"
        placeholder="Search for books type ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="books-list">
          {books.map(book => (
            <div key={book.id} className="book-item">
              <Link to={`/book/${book.id}`}> {/* Link to book details page */}
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=No+Image'}
                  alt={book.volumeInfo.title}
                />
                <h3>{book.volumeInfo.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default AllBooks;
