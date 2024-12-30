import React, { useState } from "react";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("fiction");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [them, setTheme] = useState("light-mode");


  function mode() {
    
      if(them === "light-mode"){
        setTheme("dark-mode");
      }else{
        setTheme("light-mode");
      }
    };
  

  const fetchBooks = () => {
    setLoading(true);
    setError("");
    const apiUrl = "https://openlibrary.org/search.json";

    let url = `${apiUrl}?q=${searchTerm}`;
    if (selectedGenre) {
      url += `&subject=${selectedGenre}`;
    }

    axios
      .get(url)
      .then((response) => {
        setBooks(response.data.docs);
      })
      .catch(() => {
        setError("Failed to fetch books");
      })
      .finally(() => {
        setLoading(false);
      });
  };
 
  return (
    <div id="theme" className={them}>
      <div className="App" >
       
          

        <div style={{ textAlign: "center", marginBottom: "-30px" }}>
          <h1 style={{ marginBottom: "20px" }}>Library Book Search</h1>

          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              width: "15%",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            style={{
              padding: "10px",
              width: "200px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="" >Select a genre</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="science">Science</option>
          </select>

          <button
            onClick={fetchBooks}
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Search
          </button>

    
          
          <button id="theme-toggle" onClick={mode} style={{
             padding: "10px 20px",
             backgroundColor: "green",
             marginleft: "10px",
             color: "white",
             border: "none",
             borderRadius: "5px",
             cursor: "pointer",
             marginTop: "20px",
          }}>
            change mode
          </button>

          {loading && <h3>Loading...</h3>}

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {books.length > 0 ? (
              books.map((book, index) => (
                <div
                  key={index}
                  style={{
                    width: "200px",
                    padding: "10px",
                   
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    style={{
                      width: "100px",
                      height: "150px",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedBook(book)}
                  />
                  <h3>{book.title}</h3>
                  <p>
                    <strong>Author:</strong>{" "}
                    {book.author_name ? book.author_name.join(", ") : "N/A"}
                  </p>
                </div>
              ))
            ) : (
              <p>No books found your search.</p>
            )}
          </div>

          {selectedBook && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "black",
                border: "1px solid #ccc",
                width: "100%",

                borderRadius: "10px",
                color: "white",
                textAlign: "center",
                position: "fixed",
                top: "30%",
                height: "70%",

                left: "50%",
                animation: "fade-in 2.5s ease-in-out",

                transform: "translate(-50%, -50%)",
                zIndex: 9999,
              }}
            >
              <h2>More Information</h2>
              <p>
                <strong>Title:</strong> {selectedBook.title}
              </p>
              <p>
                <strong>Author:</strong>{" "}
                {selectedBook.author_name
                  ? selectedBook.author_name.join(", ")
                  : "N/A"}
              </p>
              <p>
                <strong>First Published:</strong>{" "}
                {selectedBook.first_publish_year || "N/A"}
              </p>
              <p>
                <strong>Subjects:</strong>{" "}
                {selectedBook.subject ? selectedBook.subject.join(", ") : "N/A"}
              </p>
              <button
                onClick={() => setSelectedBook(null)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#FF5733",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
