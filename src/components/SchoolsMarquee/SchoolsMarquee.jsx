import "./SchoolsMarquee.css";

// Dynamic import for all image assets from the school-logos folder
const images = import.meta.glob("../../assets/school-logos/*.{png,jpg,jpeg,webp}", { eager: true });

const schools = [
  { name: "FanatiXxGold", logoPath: "FanatiXxGold.png" },
  { name: "Oakridge International", logoPath: "oakridge.png" },
  { name: "Heritage School", logoPath: "heritage.png" },
  { name: "Pathways World", logoPath: "pathways.png" },
  { name: "Vibgyor High", logoPath: "vibgyor.png" },
  { name: "Kalpa Academy", logoPath: "kalpa.png" },
  { name: "Podar International", logoPath: "podar.png" },
  { name: "Ryan International", logoPath: "ryan.png" },
];

const SchoolsMarquee = () => {
  // Helper to extract the proper built URL of the optimized image
  const getLogoUrl = (fileName) => {
    const key = `../../assets/school-logos/${fileName}`;
    return images[key] ? images[key].default : "";
  };

  return (
    <section className="marquee-section">
      {/* HEADER SECTION */}
      <div className="marquee-header">
        <span className="marquee-label">OUR ASSOCIATIONS</span>
        <h2 className="marquee-title">Trusted by India's leading schools</h2>
      </div>

      {/* TRACK WRAPPER WITH FADE EDGES */}
      <div className="marquee-track-wrap">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track">
          {/* Combined data loop using spread operator for seamless infinite loop */}
          {[...schools, ...schools].map((school, i) => (
            <div className="marquee-item" key={i}>
              <img
                src={getLogoUrl(school.logoPath)}
                alt={school.name}
                className="marquee-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsMarquee;