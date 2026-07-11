// Reusing SchoolsMarquee.css because both Schools Marquee and
// Corporate Associations share the same scrolling logo marquee layout.
// Any styling changes here will affect both components.
import "../SchoolsMarquee/SchoolsMarquee.css";

// Dynamic import for all image assets from the Corporate-logos folder
const images = import.meta.glob(
  "../../assets/Corporate-logos/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const corporates = [
  { name: "Christ University", logoPath: "ChristUniversity.jpeg" },
  { name: "FanatiXxGold", logoPath: "FanatiXxGold.png" },
  { name: "Sapna Book House", logoPath: "SapnaBook House.png" },
  { name: "Sapna B-House", logoPath: "SapnaB-House.jpg" },
];

const CorporateAssociations = () => {
  // Helper to extract the proper built URL of the optimized image
  const getLogoUrl = (fileName) => {
    const key = `../../assets/Corporate-logos/${fileName}`;
    return images[key] ? images[key].default : "";
  };

  return (
    <section className="marquee-section">
      <div className="marquee-header">
        <span className="marquee-label">Corporate Associations</span>
        <h2 className="marquee-title">Partnering with Industry Leaders</h2>
      </div>

      <div className="marquee-track-wrap">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track">
          {[...corporates, ...corporates].map((company, i) => (
            <div className="marquee-item" key={i}>
              <img
                src={getLogoUrl(company.logoPath)}
                alt={company.name}
                className="marquee-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateAssociations;