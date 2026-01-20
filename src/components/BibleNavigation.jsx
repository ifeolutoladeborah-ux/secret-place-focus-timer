import React from 'react';
import { BIBLE_BOOKS } from '../utils/bibleHelpers';

const BibleNavigation = ({ currentBookIdx, currentChapterIdx, onNavigate }) => {
  const currentBook = BIBLE_BOOKS[currentBookIdx];

  return (
    <div className="flex gap-2 p-4 border-b bg-white sticky top-0 z-10">
      <select 
        value={currentBookIdx}
        onChange={(e) => onNavigate(parseInt(e.target.value), 0)}
        className="p-2 border rounded bg-slate-50 flex-1"
      >
        {BIBLE_BOOKS.map((book, index) => (
          <option key={book.id} value={index}>{book.name}</option>
        ))}
      </select>

      <select 
        value={currentChapterIdx}
        onChange={(e) => onNavigate(currentBookIdx, parseInt(e.target.value))}
        className="p-2 border rounded bg-slate-50 w-24"
      >
        {[...Array(currentBook.chapters)].map((_, i) => (
          <option key={i} value={i}>Ch. {i + 1}</option>
        ))}
      </select>
    </div>
  );
};

export default BibleNavigation;