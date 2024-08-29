import React, { useState } from "react";
import "./CustomInput.scss";

function CustomInput({
  value,
  placeholder,
  disabled,
  size,
  isLoading,
  onInput,
  onChange,
}) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInput = (e) => {
    console.log("Input");
    setInputValue(e.target.value);
    if (onInput) onInput(e);
  };

  const handleBlur = (e) => {
    console.log("Blur"); // Это сработает при потере фокуса
    if (onChange) {
      onChange(e); // Вызываем onChange при потере фокуса
    }
  };

  return (
    <div
      className={`custom-input ${size} ${
        disabled ? "disabled" : ""
      } ${isLoading ? "loading" : ""}`}
    >
      <input
        type="text"
        value={inputValue}
        disabled={disabled || isLoading}
        onInput={handleInput}
        onBlur={handleBlur} // Добавляем обработчик blur
        placeholder=" "
      />
      <label>{placeholder}</label>
      {inputValue && !isLoading ? (
        <button className="clear-btn" onClick={() => setInputValue("")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      ) : (
        !isLoading && (
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>
        )
      )}
      {isLoading && <span className="loading">⏳</span>}
    </div>
  );
}

export default CustomInput;
