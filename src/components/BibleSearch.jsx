import React, { useState } from 'react';
import { searchBible } from '../utils/bibleHelpers';

const BibleSearch = ({ onJumpToVerse }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.length < 3) return;
    setIsSearching(true);
    const found = await searchBible(query);
    setResults(found.slice(0, 50)); // Limit to top 50 for performance
    setIsSearching(false);
  };

  return (
    <div className="p-4 border-b">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input 
          type="text" 
          placeholder="Search keyword (e.g. 'Faith')..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">Search</button>
      </form>

      <div className="max-h-60 overflow-y-auto">
        {isSearching && <p className="text-center py-4">Searching scriptures...</p>}
        {results.map((res, i) => (
          <div 
            key={i} 
            onClick={() => onJumpToVerse(res.book.id - 1, res.chapter - 1)}
            className="p-2 border-b cursor-pointer hover:bg-gray-50 text-sm"
          >
            <span className="font-bold">{res.book.name} {res.chapter}:{res.verse}</span>
            <p className="italic text-gray-600">"{res.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BibleSearch;