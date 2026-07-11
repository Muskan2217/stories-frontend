import "./ContestBanner.css";

const ContestBanner = ({ banner }) => {
  if (!banner) return null;

  return (
    <div className="contest-banner">
      <img
        src={banner.image_url || "/placeholder-banner.jpg"}
        alt={banner.title}
        className="contest-banner-image"
      />

      <div className="contest-banner-overlay">
        <h3 className="contest-banner-title">{banner.title}</h3>

        {banner.contest_name && (
          <p className="contest-banner-contest-name">{banner.contest_name}</p>
        )}

        {banner.edition && (
          <span className="contest-banner-edition">{banner.edition}</span>
        )}
      </div>
    </div>
  );
};

export default ContestBanner;