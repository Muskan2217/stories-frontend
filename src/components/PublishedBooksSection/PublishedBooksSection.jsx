import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./PublishedBooksSection.css";

const PublishedBooksSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(API.publishedBooks)
      .then((res) => {
        console.log("DATA:", res.data); // optional debug
        setData(res.data);
      })
      .catch((err) =>
        console.error("Error fetching published books:", err)
      );
  }, []);

  // ✅ loading state
  if (!data) return <p>Loading...</p>;

  return (
    <section className="books-section">
      {/* HEADER */}
      <div className="books-header">
        <div className="books-header-left">
          {data.badge && (
            <span className="books-badge">{data.badge}</span>
          )}
          <h2 className="books-title">{data.title}</h2>
        </div>
        <a href={data.btn_url} className="books-view-btn">
          {data.btn_label} →
        </a>
      </div>

      {/* CARDS */}
      <div className="books-grid">
        {data?.books?.map((book) => (
          <div className="book-card" key={book.id}>
            {/* IMAGE */}
            <div className="book-card-img-wrap">
              <span className="book-number">{book.book_number}</span>
              <img
                src={book.image_url}
                alt={book.title}
                className="book-card-img"
              />
                 


              {/* OVERLAY */}
              <div className="book-card-overlay">
                <h3 className="book-card-title">{book.title}</h3>
                <p className="book-card-author">
                  {book.author_name}, age {book.author_age}
                </p>
              </div>
            </div>

            {/* LINKS */}
            <div className="book-card-links">
              {book.amazon_url && (
                <a
                  href={book.amazon_url}
                  target="_blank"
                  rel="noreferrer"
                  className="book-link"
                >
                  Amazon
                </a>
              )}

              {book.flipkart_url && (
                <a
                  href={book.flipkart_url}
                  target="_blank"
                  rel="noreferrer"
                  className="book-link"
                >
                  Flipkart
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublishedBooksSection;