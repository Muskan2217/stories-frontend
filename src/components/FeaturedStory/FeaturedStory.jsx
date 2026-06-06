import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./FeaturedStory.css";

const FeaturedStory = () => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios
      .get(API.featuredStory)
      .then((res) => setStory(res.data))
      .catch((err) => console.error("Error fetching featured story:", err));
  }, []);

  if (!story) return null;

  return (
    <div className="container">
  <section className="featured-story">

  {/* </section>
    <section className="featured-story"> */}
      {/* LEFT */}
      <div className="featured-story-left">
        {story.badge && (
          <span className="featured-story-badge">
            {story.badge_icon && (
              <span className="featured-story-badge-icon">
                {story.badge_icon}
              </span>
            )}
            {story.badge}
          </span>
        )}

        <h2 className="featured-story-title">{story.title}</h2>
        <p className="featured-story-desc">{story.description}</p>

        <div className="featured-story-meta">
          {story.read_time && (
            <span className="featured-story-readtime">
              ⏱ {story.read_time}
            </span>
          )}
          <span className="featured-story-author">
            By {story.author_name}, {story.author_grade}
          </span>
        </div>

        <a href={story.btn_url} className="featured-story-btn">
          {story.btn_label} →
        </a>
      </div>

      {/* RIGHT */}
      <div className="featured-story-right">
        <img
          src={story.image_url}
          alt={story.title}
          className="featured-story-img"
        />
        <div className="featured-story-img-overlay" />
      </div>
     </section>
</div>
  );
};

export default FeaturedStory;