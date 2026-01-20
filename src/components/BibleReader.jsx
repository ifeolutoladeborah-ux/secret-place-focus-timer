import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Search, Book } from 'lucide-react';
import { BIBLE_BOOKS, getChapter, searchBible, parseReference, getVerseByReference } from '../utils/bibleHelpers';

const BibleReader = ({ onClose }) => {
  const [selectedBook, setSelectedBook] = useState(42); // Start with John (index 42)
  const [selectedChapter, setSelectedChapter] = useState(0); // Chapter 1
  const [chapterData, setChapterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  // Load chapter when book or chapter changes
  useEffect(() => {
    loadChapter();
  }, [selectedBook, selectedChapter]);

  const loadChapter = async () => {
    setLoading(true);
    const data = await getChapter(selectedBook, selectedChapter);
    setChapterData(data);
    setLoading(false);
  };

  const handlePreviousChapter = () => {
    if (selectedChapter > 0) {
      setSelectedChapter(selectedChapter - 1);
    } else if (selectedBook > 0) {
      setSelectedBook(selectedBook - 1);
      setSelectedChapter(BIBLE_BOOKS[selectedBook - 1].chapters - 1);
    }
  };

  const handleNextChapter = () => {
    const currentBook = BIBLE_BOOKS[selectedBook];
    if (selectedChapter < currentBook.chapters - 1) {
      setSelectedChapter(selectedChapter + 1);
    } else if (selectedBook < BIBLE_BOOKS.length - 1) {
      setSelectedBook(selectedBook + 1);
      setSelectedChapter(0);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearching(true);

    // Check if it's a verse reference (e.g., "John 3:16")
    const parsed = parseReference(searchQuery);
    if (parsed) {
      const result = await getVerseByReference(searchQuery);
      if (result) {
        // Navigate to that verse
        setSelectedBook(parsed.bookIndex);
        setSelectedChapter(parsed.chapterIndex);
        setSearchMode(false);
        setSearchQuery('');
        setSearching(false);
        return;
      }
    }

    // Otherwise, do keyword search
    const results = await searchBible(searchQuery);
    setSearchResults(results.slice(0, 50)); // Limit to 50 results
    setSearching(false);
  };

  const handleSearchResultClick = (result) => {
    setSelectedBook(result.book.id - 1);
    setSelectedChapter(result.chapter - 1);
    setSearchMode(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const currentBook = BIBLE_BOOKS[selectedBook];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Book className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-800">Bible Reader</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-all"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search keywords or enter reference (e.g., John 3:16)"
              className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={searching}
              className="px-6 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Search className="w-4 h-4" />
              {searching ? 'Searching...' : 'Search'}
            </button>
          </form>

          {searchResults.length > 0 && (
            <button
              onClick={() => {
                setSearchResults([]);
                setSearchQuery('');
              }}
              className="mt-2 text-sm text-emerald-600 hover:underline"
            >
              Clear {searchResults.length} results
            </button>
          )}
        </div>

        {/* Search Results */}
        {searchResults.length > 0 ? (
          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Search Results ({searchResults.length})
            </h3>
            <div className="space-y-3">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleSearchResultClick(result)}
                  className="p-4 bg-emerald-50 rounded-xl cursor-pointer hover:bg-emerald-100 transition-all"
                >
                  <p className="text-sm font-semibold text-emerald-600 mb-1">
                    {result.book.name} {result.chapter}:{result.verse}
                  </p>
                  <p className="text-gray-700">{result.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Navigation Controls */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                {/* Book Selector */}
                <select
                  value={selectedBook}
                  onChange={(e) => {
                    setSelectedBook(parseInt(e.target.value));
                    setSelectedChapter(0);
                  }}
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none font-medium"
                >
                  <optgroup label="Old Testament">
                    {BIBLE_BOOKS.filter(b => b.testament === 'Old').map((book) => (
                      <option key={book.id} value={book.id - 1}>
                        {book.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="New Testament">
                    {BIBLE_BOOKS.filter(b => b.testament === 'New').map((book) => (
                      <option key={book.id} value={book.id - 1}>
                        {book.name}
                      </option>
                    ))}
                  </optgroup>
                </select>

                {/* Chapter Selector */}
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(parseInt(e.target.value))}
                  className="w-32 px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none font-medium"
                >
                  {Array.from({ length: currentBook.chapters }, (_, i) => (
                    <option key={i} value={i}>
                      Chapter {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Chapter Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading...</div>
                </div>
              ) : chapterData ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {chapterData.book.name} {chapterData.chapter}
                  </h3>
                  <div className="space-y-4">
                    {chapterData.verses.map((verse, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-emerald-600 font-semibold text-sm mt-1 min-w-[30px]">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 leading-relaxed">{verse}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Unable to load chapter</div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex gap-3">
                <button
                  onClick={handlePreviousChapter}
                  disabled={selectedBook === 0 && selectedChapter === 0}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                <button
                  onClick={handleNextChapter}
                  disabled={selectedBook === BIBLE_BOOKS.length - 1 && selectedChapter === currentBook.chapters - 1}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BibleReader;