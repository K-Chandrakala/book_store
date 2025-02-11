import React, { useState } from "react";
import axios from "axios";
import "../styles/App.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/books", { title, author })
      .then(() => {
        setTitle("");
        setAuthor("");
        alert("Book added successfully");
      })
      .catch(error => console.error("Error adding book:", error));
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
