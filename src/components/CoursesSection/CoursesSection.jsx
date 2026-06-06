import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./CoursesSection.css";

const CoursesSection = () => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    axios
      .get(API.coursesSection)
      .then((res) => setSection(res.data))
      .catch((err) => console.error("Error fetching courses section:", err));
  }, []);

  if (!section) return null;

  return (
    <section className="courses">
      {/* HEADER */}
      <div className="courses-header">
        {section.badge && (
          <span className="courses-badge">
            <span className="courses-badge-icon">✎</span>
            {section.badge}
          </span>
        )}
        <h2 className="courses-title">{section.title}</h2>
        <p className="courses-desc">{section.description}</p>
      </div>

      {/* CARDS */}
      <div className="courses-grid">
        {section.levels.map((level, i) => (
          <div className="course-card" key={level.id}>
            <div className="course-card-top">
              <span className="course-level-label">{level.level_label}</span>
              <div className="course-card-blob" />
            </div>
            <h3 className="course-card-title">{level.title}</h3>
            <p className="course-card-age">{level.age_range}</p>
            <p className="course-card-desc">{level.description}</p>
            <a href={level.btn_url} className="course-card-btn">
              {level.btn_label} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;