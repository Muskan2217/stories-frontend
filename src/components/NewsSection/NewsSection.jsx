import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./NewsSection.css";

const categoryStyles = {
  yellow: "news-tag-yellow",
  green:  "news-tag-green",
  gray:   "news-tag-gray",
};

const NewsSection = () => {
  const [data, setData] = useState({ news: [] });

  useEffect(() => {
    axios
      .get(API.newsSection)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  if (!data.title) return null;

  return (
    <section className="news-section">
      {/* HEADER */}
      <div className="news-header">
        <div className="news-header-left">
          {data.badge && (
            <span className="news-badge">{data.badge}</span>
          )}
          <h2 className="news-title">{data.title}</h2>
        </div>
        <a href={data.btn_url} className="news-view-btn">
          {data.btn_label} →
        </a>
      </div>

      {/* CARDS */}
      <div className="news-grid">
        {data.news.map((item) => (
          <div className="news-card" key={item.id}>
            {/* TOP ROW */}
            <div className="news-card-top">
              <span className={`news-tag ${categoryStyles[item.category_color] || "news-tag-gray"}`}>
                {item.category}
              </span>
              <span className="news-date">📅 {item.date}</span>
            </div>

            {/* CONTENT */}
            <h3 className="news-card-title">
              <a href={item.url}>{item.title}</a>
            </h3>
            <p className="news-card-excerpt">{item.excerpt}</p>

            {/* LINK */}
            <a href={item.url} className="news-card-btn">
              {item.btn_label} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;