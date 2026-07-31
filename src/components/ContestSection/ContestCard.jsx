import { useState } from "react";
import Countdown from "./Countdown";
import "./ContestCard.css";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const ContestCard = ({ contest }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className="contest-card">
      <span className="contest-category-badge">{contest.category?.name}</span>

      <img
        src={contest.card_image_url || "/placeholder-contest.jpg"}
        alt={contest.title}
        className="contest-card-image"
        loading="lazy"
      />

      <h3 className="contest-title">{contest.title}</h3>
      <p className="contest-description">{contest.description}</p>

      {(contest.start_date || contest.closing_date) && (
        <div className="contest-date-range">
          {formatDate(contest.start_date)} — {formatDate(contest.closing_date)}
        </div>
      )}

      <div className="contest-closing-text">
        Closes in {contest.countdown?.days ?? 0} days
      </div>

      <Countdown closesAt={contest.closing_date} />

      {contest.instructions && (
        <div className="contest-instructions">
          <button
            type="button"
            className="contest-instructions-btn"
            onClick={() => setShowInstructions((prev) => !prev)}
          >
            {showInstructions ? "Hide Instructions ▲" : "View Instructions ▼"}
          </button>

          {showInstructions && (
            <p className="contest-instructions-text">{contest.instructions}</p>
          )}
        </div>
      )}

      <div className="contest-card-footer">
        <span className="contest-age-badge">{contest.age_group?.name}</span>
        <a href={`/contests/${contest.slug}`} className="join-contest-btn">
          Join Contest →
        </a>
      </div>
    </div>
  );
};

export default ContestCard;