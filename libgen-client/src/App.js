import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Search error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>LibGen Search</h2>
      <input
        type="text"
        placeholder="Search for a book"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: '300px', marginRight: 10 }}
      />
      <button onClick={searchBooks}>Search</button>

      {loading && <p>Loading...</p>}
      {!loading && books.length > 0 && (
        <ul>
          {books.map((book, index) => (
            <li key={index} style={{ marginBottom: 10 }}>
              <strong>{book.title}</strong> by {book.author} ({book.year})<br />
              Language: {book.language}, Size: {book.size}, Ext: {book.extension}<br />
              <a href={book.mirrorLink} target="_blank" rel="noopener noreferrer">Download</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
