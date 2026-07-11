import "./WinnerCard.css";

const medalClass = {
  Gold: "medal-gold",
  Silver: "medal-silver",
  Bronze: "medal-bronze",
};

const WinnerCard = ({ winner }) => {
  return (
    <div className="winner-card">
      <span className="winner-rank">{winner.position}</span>

      <div className="winner-photo-wrap">
        <img
          src={winner.photo_url || "/placeholder-avatar.jpg"}
          alt={winner.student_name}
          className="winner-photo"
          loading="lazy"
        />

        {winner.medal && (
          <span className={`winner-medal ${medalClass[winner.medal] || ""}`}>
            🎖 {winner.medal}
          </span>
        )}
      </div>

      <h4 className="winner-name">{winner.student_name}</h4>

      <p className="winner-age">
        Age {winner.age}
      </p>

      <p className="winner-story-title">
        "{winner.story?.title}"
      </p>

      <a
        href={winner.story?.pdf_url || `/stories/${winner.story?.slug}`}
        target="_blank"
        rel="noreferrer"
        className="view-story-btn"
      >
        📖 View Story
      </a>
    </div>
  );
};

export default WinnerCard;