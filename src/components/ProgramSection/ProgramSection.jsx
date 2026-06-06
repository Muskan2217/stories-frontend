import { useEffect, useState } from "react";
import axios from "axios";
import "./ProgramSection.css";
import { API } from "../../config/api";

const ProgramSection = () => {
  const [program, setProgram] = useState(null);

useEffect(() => {
  axios
    .get(API.programs)
    .then((res) => setProgram(res.data))
    .catch((err) => console.error("Error fetching program:", err));
}, []);

  if (!program) return null;

  const features = [
    { icon: program.feature_1_icon, title: program.feature_1_title, text: program.feature_1_text },
    { icon: program.feature_2_icon, title: program.feature_2_title, text: program.feature_2_text },
    { icon: program.feature_3_icon, title: program.feature_3_title, text: program.feature_3_text },
    { icon: program.feature_4_icon, title: program.feature_4_title, text: program.feature_4_text },
  ];

  return (
    <section className="program">
      {/* LEFT */}
      <div className="program-left">
        <div className="program-img-wrap">
          <img
            src={program.image_url}
            alt={program.title}
            className="program-img"
          />
          {program.overlay_year && (
            <div className="program-overlay">
              <strong>{program.overlay_year}</strong>
              <p>{program.overlay_text}</p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="program-right">
        {program.badge && (
          <span className="program-badge">{program.badge}</span>
        )}

        <h2 className="program-title">{program.title}</h2>
        <p className="program-desc">{program.description}</p>

        <div className="program-features">
          {features.map((f, i) => (
            <div className="program-feature-card" key={i}>
              <span className="program-feature-icon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        <a href={program.btn_url} className="program-btn">
          {program.btn_label} →
        </a>
      </div>
    </section>
  );
};

export default ProgramSection;