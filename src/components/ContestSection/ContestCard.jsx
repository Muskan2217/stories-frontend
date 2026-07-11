import Countdown from "./Countdown";
import "./ContestCard.css";

const ContestCard = ({ contest }) => {
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

      <div className="contest-closing-text">
        Closes in {contest.countdown?.days ?? 0} days
      </div>

      <Countdown closesAt={contest.closing_date} />

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