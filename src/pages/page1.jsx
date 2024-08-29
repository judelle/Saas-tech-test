import React, { useState, useEffect } from "react";
import BookModal from "../components/BookModal";

function Page1() {
  const [books, setBooks] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5); // Количество книг на одной странице

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://anapioficeandfire.com/api/books");
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const getYear = (dateString) => new Date(dateString).getFullYear();

  const sortBooks = (books) =>
    books.sort((a, b) => {
      const yearA = getYear(a.released);
      const yearB = getYear(b.released);
      return sortOrder === "desc" ? yearB - yearA : yearA - yearB;
    });

  // Фильтрация и сортировка
  const filteredBooks = sortBooks(
    books.filter((book) =>
      book.name.toLowerCase().includes(filterName.toLowerCase())
    )
  );

  // Пагинация
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Фильтр по названию книги"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
        className="border p-2 mb-4"
      />
      <div className="mb-4">
        <label className="mr-2">Сортировать по году:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2"
        >
          <option value="desc">Сначала новые</option>
          <option value="asc">Сначала старые</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {currentBooks.map((book) => (
          <div
            key={book.url}
            className="border p-4 cursor-pointer"
            onClick={() => setSelectedBook(book)}
          >
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border p-2 mr-2"
        >
          Назад
        </button>
        <span>
          Страница {currentPage} из {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="border p-2 ml-2"
        >
          Вперед
        </button>
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default Page1;
