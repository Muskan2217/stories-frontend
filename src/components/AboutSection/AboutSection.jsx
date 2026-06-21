import { useEffect, useState } from "react";
import "./AboutSection.css";
import axios from "axios";
import { API } from "../../config/api";

const AboutSection = () => {
  const [about, setAbout] = useState(null);

 useEffect(() => {
  axios.get(API.aboutSection)
    .then((res) => setAbout(res.data))
    .catch((err) => console.error(err));
}, []);

  if (!about) return null;

  return (
    <section className="about">
      {/* LEFT */}
      <div className="about-left">
        {about.badge && <span className="about-badge">{about.badge}</span>}

        <h2 className="about-title">
          {about.title} <br />
          <em>{about.italic_title}</em>
        </h2>

        <p className="about-desc">{about.description_1}</p>
        <p className="about-desc">{about.description_2}</p>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon vision-icon">👁</div>
            <h4>{about.vision_title}</h4>
            <p>{about.vision_text}</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon mission-icon">🎯</div>
            <h4>{about.mission_title}</h4>
            <p>{about.mission_text}</p>
          </div>
        </div>

        <a href={about.btn_url} className="about-btn">
          {about.btn_label} →
        </a>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        <div className="about-img-wrap">
          <div className="about-year-badge">✨ Since 2020</div>
          <img src={about.image_url} alt={about.title} className="about-img" />
          <div className="about-stat">
            <span className="about-stat-icon">📖</span>
            <div>
              <strong>{about.stat_number}</strong>
              <p>{about.stat_label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;