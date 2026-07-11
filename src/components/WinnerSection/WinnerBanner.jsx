import "./WinnerBanner.css";

const WinnerBanner = ({ banner }) => {
  if (!banner) return null;

  return (
    <div className="winner-banner">
      <img
        src={banner.image_url || "/placeholder-banner.jpg"}
        alt={banner.title}
        className="winner-banner-image"
      />

      <div className="winner-banner-overlay">
        <h3 className="winner-banner-title">{banner.title}</h3>

        {banner.contest_name && (
          <p className="winner-banner-contest-name">{banner.contest_name}</p>
        )}

        {banner.edition && (
          <span className="winner-banner-edition">{banner.edition}</span>
        )}

        {banner.age_group?.name && (
          <div className="winner-banner-agegroup">
            <small>Age Group</small>
            <strong>{banner.age_group.name}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default WinnerBanner;