// List of all 66 Bible books with their abbreviations matching the JSON
export const BIBLE_BOOKS = [
  // Old Testament
  { id: 1, name: 'Genesis', abbrev: 'gn', testament: 'Old', chapters: 50 },
  { id: 2, name: 'Exodus', abbrev: 'ex', testament: 'Old', chapters: 40 },
  { id: 3, name: 'Leviticus', abbrev: 'lv', testament: 'Old', chapters: 27 },
  { id: 4, name: 'Numbers', abbrev: 'nm', testament: 'Old', chapters: 36 },
  { id: 5, name: 'Deuteronomy', abbrev: 'dt', testament: 'Old', chapters: 34 },
  { id: 6, name: 'Joshua', abbrev: 'js', testament: 'Old', chapters: 24 },
  { id: 7, name: 'Judges', abbrev: 'jg', testament: 'Old', chapters: 21 },
  { id: 8, name: 'Ruth', abbrev: 'rt', testament: 'Old', chapters: 4 },
  { id: 9, name: '1 Samuel', abbrev: '1sm', testament: 'Old', chapters: 31 },
  { id: 10, name: '2 Samuel', abbrev: '2sm', testament: 'Old', chapters: 24 },
  { id: 11, name: '1 Kings', abbrev: '1kg', testament: 'Old', chapters: 22 },
  { id: 12, name: '2 Kings', abbrev: '2kg', testament: 'Old', chapters: 25 },
  { id: 13, name: '1 Chronicles', abbrev: '1ch', testament: 'Old', chapters: 29 },
  { id: 14, name: '2 Chronicles', abbrev: '2ch', testament: 'Old', chapters: 36 },
  { id: 15, name: 'Ezra', abbrev: 'ezr', testament: 'Old', chapters: 10 },
  { id: 16, name: 'Nehemiah', abbrev: 'ne', testament: 'Old', chapters: 13 },
  { id: 17, name: 'Esther', abbrev: 'est', testament: 'Old', chapters: 10 },
  { id: 18, name: 'Job', abbrev: 'jb', testament: 'Old', chapters: 42 },
  { id: 19, name: 'Psalms', abbrev: 'ps', testament: 'Old', chapters: 150 },
  { id: 20, name: 'Proverbs', abbrev: 'pr', testament: 'Old', chapters: 31 },
  { id: 21, name: 'Ecclesiastes', abbrev: 'ec', testament: 'Old', chapters: 12 },
  { id: 22, name: 'Song of Solomon', abbrev: 'ss', testament: 'Old', chapters: 8 },
  { id: 23, name: 'Isaiah', abbrev: 'is', testament: 'Old', chapters: 66 },
  { id: 24, name: 'Jeremiah', abbrev: 'jr', testament: 'Old', chapters: 52 },
  { id: 25, name: 'Lamentations', abbrev: 'lm', testament: 'Old', chapters: 5 },
  { id: 26, name: 'Ezekiel', abbrev: 'ek', testament: 'Old', chapters: 48 },
  { id: 27, name: 'Daniel', abbrev: 'dn', testament: 'Old', chapters: 12 },
  { id: 28, name: 'Hosea', abbrev: 'ho', testament: 'Old', chapters: 14 },
  { id: 29, name: 'Joel', abbrev: 'jl', testament: 'Old', chapters: 3 },
  { id: 30, name: 'Amos', abbrev: 'am', testament: 'Old', chapters: 9 },
  { id: 31, name: 'Obadiah', abbrev: 'ob', testament: 'Old', chapters: 1 },
  { id: 32, name: 'Jonah', abbrev: 'jnh', testament: 'Old', chapters: 4 },
  { id: 33, name: 'Micah', abbrev: 'mi', testament: 'Old', chapters: 7 },
  { id: 34, name: 'Nahum', abbrev: 'na', testament: 'Old', chapters: 3 },
  { id: 35, name: 'Habakkuk', abbrev: 'hk', testament: 'Old', chapters: 3 },
  { id: 36, name: 'Zephaniah', abbrev: 'zp', testament: 'Old', chapters: 3 },
  { id: 37, name: 'Haggai', abbrev: 'hg', testament: 'Old', chapters: 2 },
  { id: 38, name: 'Zechariah', abbrev: 'zc', testament: 'Old', chapters: 14 },
  { id: 39, name: 'Malachi', abbrev: 'ml', testament: 'Old', chapters: 4 },
  
  // New Testament
  { id: 40, name: 'Matthew', abbrev: 'mt', testament: 'New', chapters: 28 },
  { id: 41, name: 'Mark', abbrev: 'mk', testament: 'New', chapters: 16 },
  { id: 42, name: 'Luke', abbrev: 'lk', testament: 'New', chapters: 24 },
  { id: 43, name: 'John', abbrev: 'jn', testament: 'New', chapters: 21 },
  { id: 44, name: 'Acts', abbrev: 'ac', testament: 'New', chapters: 28 },
  { id: 45, name: 'Romans', abbrev: 'rm', testament: 'New', chapters: 16 },
  { id: 46, name: '1 Corinthians', abbrev: '1co', testament: 'New', chapters: 16 },
  { id: 47, name: '2 Corinthians', abbrev: '2co', testament: 'New', chapters: 13 },
  { id: 48, name: 'Galatians', abbrev: 'gl', testament: 'New', chapters: 6 },
  { id: 49, name: 'Ephesians', abbrev: 'ep', testament: 'New', chapters: 6 },
  { id: 50, name: 'Philippians', abbrev: 'pp', testament: 'New', chapters: 4 },
  { id: 51, name: 'Colossians', abbrev: 'cl', testament: 'New', chapters: 4 },
  { id: 52, name: '1 Thessalonians', abbrev: '1th', testament: 'New', chapters: 5 },
  { id: 53, name: '2 Thessalonians', abbrev: '2th', testament: 'New', chapters: 3 },
  { id: 54, name: '1 Timothy', abbrev: '1tm', testament: 'New', chapters: 6 },
  { id: 55, name: '2 Timothy', abbrev: '2tm', testament: 'New', chapters: 4 },
  { id: 56, name: 'Titus', abbrev: 'ti', testament: 'New', chapters: 3 },
  { id: 57, name: 'Philemon', abbrev: 'ph', testament: 'New', chapters: 1 },
  { id: 58, name: 'Hebrews', abbrev: 'hb', testament: 'New', chapters: 13 },
  { id: 59, name: 'James', abbrev: 'jm', testament: 'New', chapters: 5 },
  { id: 60, name: '1 Peter', abbrev: '1pt', testament: 'New', chapters: 5 },
  { id: 61, name: '2 Peter', abbrev: '2pt', testament: 'New', chapters: 3 },
  { id: 62, name: '1 John', abbrev: '1jn', testament: 'New', chapters: 5 },
  { id: 63, name: '2 John', abbrev: '2jn', testament: 'New', chapters: 1 },
  { id: 64, name: '3 John', abbrev: '3jn', testament: 'New', chapters: 1 },
  { id: 65, name: 'Jude', abbrev: 'jd', testament: 'New', chapters: 1 },
  { id: 66, name: 'Revelation', abbrev: 'rv', testament: 'New', chapters: 22 }
];

// Global variable to store loaded Bible data
let bibleData = null;

// Load the Bible JSON file once
export const loadBible = async () => {
  if (bibleData) return bibleData; // Already loaded
  
  try {
    const response = await fetch('/bible/en_kjv.json');
    bibleData = await response.json();
    return bibleData;
  } catch (error) {
    console.error('Error loading Bible:', error);
    return null;
  }
};

// Get a specific chapter
export const getChapter = async (bookIndex, chapterIndex) => {
  const bible = await loadBible();
  if (!bible || !bible[bookIndex]) return null;
  
  const book = bible[bookIndex];
  if (!book.chapters[chapterIndex]) return null;
  
  return {
    book: BIBLE_BOOKS[bookIndex],
    chapter: chapterIndex + 1,
    verses: book.chapters[chapterIndex]
  };
};

// Get a specific verse
export const getVerse = async (bookIndex, chapterIndex, verseIndex) => {
  const chapterData = await getChapter(bookIndex, chapterIndex);
  if (!chapterData || !chapterData.verses[verseIndex]) return null;
  
  return {
    book: chapterData.book,
    chapter: chapterData.chapter,
    verse: verseIndex + 1,
    text: chapterData.verses[verseIndex]
  };
};

// Search for verses containing a keyword
export const searchBible = async (keyword) => {
  const bible = await loadBible();
  if (!bible) return [];
  
  const results = [];
  const searchTerm = keyword.toLowerCase();
  
  bible.forEach((book, bookIndex) => {
    book.chapters.forEach((chapter, chapterIndex) => {
      chapter.forEach((verse, verseIndex) => {
        if (verse.toLowerCase().includes(searchTerm)) {
          results.push({
            book: BIBLE_BOOKS[bookIndex],
            chapter: chapterIndex + 1,
            verse: verseIndex + 1,
            text: verse
          });
        }
      });
    });
  });
  
  return results;
};

// Parse verse reference (e.g., "John 3:16" → { bookIndex, chapterIndex, verseIndex })
export const parseReference = (reference) => {
  // Match patterns like "John 3:16" or "1 John 3:16" or "Genesis 1:1"
  const match = reference.match(/^(\d?\s?[A-Za-z]+)\s*(\d+):?(\d+)?/i);
  if (!match) return null;
  
  const bookName = match[1].trim().toLowerCase();
  const chapter = parseInt(match[2]);
  const verse = match[3] ? parseInt(match[3]) : null;
  
  // Find the book
  const book = BIBLE_BOOKS.find(b => 
    b.name.toLowerCase() === bookName || 
    b.abbrev.toLowerCase() === bookName
  );
  
  if (!book) return null;
  
  return {
    bookIndex: book.id - 1,
    chapterIndex: chapter - 1,
    verseIndex: verse ? verse - 1 : null,
    book: book,
    chapter: chapter,
    verse: verse
  };
};

// Get verse by reference string
export const getVerseByReference = async (reference) => {
  const parsed = parseReference(reference);
  if (!parsed) return null;
  
  if (parsed.verseIndex !== null) {
    return await getVerse(parsed.bookIndex, parsed.chapterIndex, parsed.verseIndex);
  } else {
    return await getChapter(parsed.bookIndex, parsed.chapterIndex);
  }
};