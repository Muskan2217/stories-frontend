import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./AchieversSection.css";

const AchieversSection = () => {
  const [data, setData] = useState({ achievers: [] });
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const visibleCards = 4;

  useEffect(() => {
    axios
      .get(API.achieversSection)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching achievers:", err));
  }, []);

  if (!data.title) return null;

  const maxIndex = Math.max(0, data.achievers.length - visibleCards);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="achievers">
      {/* HEADER */}
      <div className="achievers-header">
        <div className="achievers-header-left">
          {data.badge && (
            <span className="achievers-badge">{data.badge}</span>
          )}
          <h2 className="achievers-title">{data.title}</h2>
        </div>

        {/* ARROWS */}
        <div className="achievers-arrows">
          <button
            className={`achievers-arrow ${current === 0 ? "disabled" : ""}`}
            onClick={prev}
            disabled={current === 0}
          >
            ‹
          </button>
          <button
            className={`achievers-arrow ${current === maxIndex ? "disabled" : ""}`}
            onClick={next}
            disabled={current === maxIndex}
          >
            ›
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="achievers-slider-wrap">
        <div
          className="achievers-track"
          ref={trackRef}
          style={{
            transform: `translateX(calc(-${current} * (25% + 16px)))`,
          }}
        >
          {data.achievers.map((a) => (
            <div className="achiever-card" key={a.id}>
              <div className="achiever-img-wrap">
                <img
                  src={a.image_url}
                  alt={a.name}
                  className="achiever-img"
                />
                <div className="achiever-overlay">
                  <span className="achiever-label">
                    {a.achievement_label}
                  </span>
                  <h3 className="achiever-name">{a.name}</h3>
                  <p className="achiever-age">Age {a.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchieversSection;