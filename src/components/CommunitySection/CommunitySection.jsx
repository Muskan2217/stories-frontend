import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./CommunitySection.css";

const CommunitySection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(API.communitySection)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching community section:", err));
  }, []);

  if (!data) return null;

  return (
    <section className="community">
      {/* LEFT */}
      <div className="community-left">
        <div className="community-img-wrap">
          <img
            src={data.image_url}
            alt={data.title}
            className="community-img"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="community-right">
        {data.badge && (
          <span className="community-badge">{data.badge}</span>
        )}

        <h2 className="community-title">{data.title}</h2>
        <p className="community-desc">{data.description}</p>

        {/* FEATURES GRID */}
        <div className="community-features">
          {data.features.map((f) => (
            <div className="community-feature" key={f.id}>
              <span className="community-feature-icon">{f.icon}</span>
              <span className="community-feature-text">{f.text}</span>
            </div>
          ))}
        </div>

        <a href={data.btn_url} className="community-btn">
          {data.btn_label}
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;