import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Base from '../components/Base'
import '../css/headings.css'

function Searchpage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9092/library/book/search?search=${searchQuery}`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchQuery]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (<Base>
    <div className='row mt-5'>
        <center>
            <h3 className='text2'>Search by title</h3>
      <input type="search" value={searchQuery} onChange={handleSearchChange} /></center>
      {books.map(book => (
        <div key={book.bid}>
          <h3>{book.btitle}</h3>
          <p>{book.bauthor}</p>
          <p>{book.bdesc}</p>
        </div>
      ))}
    </div>
    </Base>
  );
}

export default Searchpage;

