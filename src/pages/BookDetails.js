import './bookdetails.css';

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom'; // Use to get params from URL

function BookDetails() {
  const { id } = useParams(); // Extract the book ID from the URL
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBookDetails(id);
  }, [id]);

  const fetchBookDetails = async (bookId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      setBookDetails(response.data);
    } catch (error) {
      console.error('Error fetching book details:', error);
      setBookDetails(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!bookDetails) {
    return <p>Book not found.</p>;
  }

  return (
    <div className='bg'>
    <div className="book-details">
      <h2>{bookDetails.volumeInfo.title}</h2>
      <img
        src={bookDetails.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x193?text=No+Image'}
        alt={bookDetails.volumeInfo.title}
      />
      <p>{bookDetails.volumeInfo.description || 'No description available.'}</p>
      <p><strong>Author(s):</strong> {bookDetails.volumeInfo.authors?.join(', ')}</p>
      <p><strong>Published Date:</strong> {bookDetails.volumeInfo.publishedDate}</p>
     
    </div>
    </div>
  );
  
}

export default BookDetails;
