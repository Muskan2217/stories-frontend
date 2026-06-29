import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./AchieversSection.css";

const AchieversSection = () => {
  const [data, setData] = useState({ achievers: [] });
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(4);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    axios
      .get(API.achieversSection)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching achievers:", err));

    const handleResize = () => {
      if (window.innerWidth <= 480) setVisibleCards(1.2);
      else if (window.innerWidth <= 768) setVisibleCards(2);
      else if (window.innerWidth <= 1024) setVisibleCards(3);
      else setVisibleCards(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data || !data.achievers || data.achievers.length === 0) return null;

  const totalItems = data.achievers.length;
  const cardWidthPercent = 100 / visibleCards;
  const maxIndex = Math.max(0, totalItems - Math.floor(visibleCards));

  const prev = () => {
    setCurrent((c) => (c === 0 ? maxIndex : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === maxIndex ? 0 : c + 1));
  };

  const getPositionX = (e) => {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  };

  const setSliderPosition = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const animation = () => {
    setSliderPosition();
    if (isDragging.current) requestAnimationFrame(animation);
  };

  const dragStart = (e) => {
    isDragging.current = true;
    startX.current = getPositionX(e);
    
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      const trackWidth = trackRef.current.offsetWidth;
      const singleCardWidth = trackWidth / totalItems;
      prevTranslate.current = -current * singleCardWidth;
    }
    
    animationRef.current = requestAnimationFrame(animation);
  };

  const dragMove = (e) => {
    if (!isDragging.current) return;
    const currentX = getPositionX(e);
    const diff = currentX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
  };

  const dragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    cancelAnimationFrame(animationRef.current);

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      const trackWidth = trackRef.current.offsetWidth;
      const singleCardWidth = trackWidth / totalItems;
      const movedBy = currentTranslate.current - prevTranslate.current;

      let newIndex = current;
      if (movedBy < -50 && current < maxIndex) {
        newIndex = current + 1;
      } else if (movedBy > 50 && current > 0) {
        newIndex = current - 1;
      }

      setCurrent(newIndex);
      trackRef.current.style.transform = `translateX(calc(-${newIndex} * (100% / ${visibleCards})))`;
    }
  };

  return (
    <section className="achievers">
      <div className="achievers-header">
        <div className="achievers-header-left">
          {data.badge && <span className="achievers-badge">{data.badge}</span>}
          <h2 className="achievers-title">{data.title || "Achievers"}</h2>
        </div>

        <div className="achievers-arrows">
          <button className="achievers-arrow" onClick={prev}>‹</button>
          <button className="achievers-arrow" onClick={next}>›</button>
        </div>
      </div>

      <div 
        className="achievers-slider-wrap"
        onTouchStart={dragStart}
        onTouchMove={dragMove}
        onTouchEnd={dragEnd}
        onMouseDown={dragStart}
        onMouseMove={dragMove}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
      >
        <div
          className="achievers-track"
          ref={trackRef}
          style={{
            transform: `translateX(calc(-${current} * (100% / ${visibleCards})))`,
          }}
        >
          {data.achievers.map((a) => (
            <div
              className="achiever-card"
              key={a.id}
              style={{
                flex: `0 0 ${cardWidthPercent}%`,
                minWidth: `${cardWidthPercent}%`,
              }}
            >
              <div className="achiever-img-wrap">
                <img src={a.image_url} alt={a.name} className="achiever-img" draggable="false" />
                <div className="achiever-overlay">
                  <span className="achiever-label">{a.achievement_label}</span>
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