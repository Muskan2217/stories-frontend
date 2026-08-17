import "./SchoolsMarquee.css";

// Dynamic import for all image assets from the school-logos folder
const images = import.meta.glob(
  "../../assets/school-logos/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

// NOTE: website / linkedin are placeholders (null) — replace with
// actual URLs once the client shares them. Links only render when present.
const schools = [
  {
    name: "Cornerstone School",
    place: "Faridabad",
    website: "https://example.com",
    linkedin: "https://linkedin.com",
    logoPath: "CornerstoneSchool.jpg",
  },
  {
    name: "FanatiXxGold",
    place: "Delhi",
    website: "https://example.com",
    linkedin: "https://linkedin.com",
    logoPath: "FanatiXxGold.png",
  },
  {
    name: "St Antony School",
    place: "Mumbai",
    website: "https://example.com",
    linkedin: "https://linkedin.com",
    logoPath: "StAntonySchool.jpg",
  },
  {
    name: "KLE School",
    place: "Bengaluru",
    website: "https://example.com",
    linkedin: "https://linkedin.com",
    logoPath: "KLESchool.jpg",
  },
  {
    name: "Sanskaar School",
    place: "Pune",
    website: "https://example.com",
    linkedin: "https://linkedin.com",
    logoPath: "Sanskaar-School.png",
  },
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
              <div className="marquee-school-info">
                <p className="marquee-school-name">{school.name}</p>
                <p className="marquee-school-place">📌 {school.place}</p>

                {(school.website || school.linkedin) && (
                  <div className="marquee-links">
                    {school.website && (
                      <a href={school.website} target="_blank" rel="noreferrer">
                        🌐
                      </a>
                    )}
                    {school.linkedin && (
                      <a
                        href={school.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                         LinkedIn 
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsMarquee;
