import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HeroSlider.css";
import { API } from "../../config/api";

const HeroSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    axios.get(API.heroSlider).then((res) => {
      setSliders(res.data);
    });
  }, []);



  useEffect(() => {
  if (sliders.length === 0 || isPaused) return;

  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % sliders.length);
  }, 7000);

  return () => clearInterval(timer);
}, [sliders, isPaused]);

  const prev = () =>
    setCurrent((c) => (c - 1 + sliders.length) % sliders.length);
  const next = () => setCurrent((c) => (c + 1) % sliders.length);

  if (sliders.length === 0) return null;

  const slide = sliders[current];

  return (
    <section
  className="hero"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
      {/* Left Side */}
     <div className="hero-left">
  <div key={current} className="hero-content">
    
    <span className="hero-badge">
      ● India’s 1st and only Literary Platform for Kids
    </span>

    <h1 className="hero-title">{slide.title}</h1>
    <p className="hero-subtitle">{slide.subtitle}</p>

    <div className="hero-btns">
      <a
        href={slide.primary_btn_url || slide.button_link || "#"}
        className="btn-primary"
      >
        {slide.primary_btn_label || slide.button_text || "Explore"}
      </a>

      {(slide.outline_btn_label || slide.outline_btn_url) && (
        <a href={slide.outline_btn_url || "#"} className="btn-outline">
          {slide.outline_btn_label || "Learn More"}
        </a>
      )}
    </div>

  </div>

  {/* NAV stays outside */}
  <div className="hero-nav">
    <button className="arrow" onClick={prev}>←</button>

    <div className="dots">
      {sliders.map((_, i) => (
        <span
          key={i}
          className={`dot ${i === current ? "active" : ""}`}
          onClick={() => setCurrent(i)}
        />
      ))}
    </div>

    <button className="arrow" onClick={next}>→</button>
  </div>
</div>

      {/* Right Side */}
<div className="hero-right">
  <div className="hero-img-layer">
    {sliders.map((s, i) => (
      <img
  key={i}
  src={s.image_url}
  alt={s.title}
  className={`hero-img ${i === current ? "active" : ""} ${isPaused ? "paused" : ""}`}
/>
    ))}
  </div>


        {/* Static Badge */}
        <div className="hero-stat">
          <span className="stat-icon">⭐</span>
          <div>
            <strong>4K+</strong>
            <p>Young Authors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
