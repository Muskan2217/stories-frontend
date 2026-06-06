import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./GallerySection.css";

const GallerySection = () => {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    axios
      .get(API.gallerySection)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  if (!data.title) return null;

  return (
    <section className="gallery">
      {/* HEADER */}
      <div className="gallery-header">
        <div className="gallery-header-left">
          {data.badge && (
            <span className="gallery-badge">
              📷 {data.badge}
            </span>
          )}
          <h2 className="gallery-title">{data.title}</h2>
        </div>
        <a href={data.btn_url} className="gallery-view-btn">
          {data.btn_label} →
        </a>
      </div>

      {/* MASONRY GRID */}
      <div className="gallery-grid">
        {data.items.map((item) => (
          <div
            className={`gallery-item gallery-item--${item.span}`}
            key={item.id}
          >
            <div className="gallery-item-inner">
              <img
                src={item.image_url}
                alt={item.label}
                className="gallery-img"
              />
              {/* HOVER OVERLAY */}
              <div className="gallery-overlay">
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;