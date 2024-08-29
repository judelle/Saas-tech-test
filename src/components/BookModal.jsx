import React, { useEffect, useState } from "react";

function BookModal({ book, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (book) {
      setShow(true);
    }
  }, [book]);

  if (!book) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-lg max-w-lg w-full transform transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-12"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{book.name}</h2>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong>Автор(ы):</strong> {book.authors.join(", ")}
        </p>
        <p>
          <strong>Количество страниц:</strong> {book.numberOfPages}
        </p>
        <p>
          <strong>Издатель:</strong> {book.publisher}
        </p>
        <p>
          <strong>Страна:</strong> {book.country}
        </p>
        <p>
          <strong>Тип издания:</strong> {book.mediaType}
        </p>
        <p>
          <strong>Дата выпуска:</strong>{" "}
          {new Date(book.released).toDateString()}
        </p>
      </div>
    </div>
  );
}

export default BookModal;
