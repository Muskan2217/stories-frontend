import "./SchoolEngagement.css";

const schools = [
  { name: "Inventure Academy", logo: "/school-logos/inventure.png" },
  { name: "Oakridge International", logo: "/school-logos/oakridge.png" },
  { name: "Heritage School", logo: "/school-logos/heritage.png" },
  { name: "Pathways World", logo: "/school-logos/pathways.png" },
  { name: "Vibgyor High", logo: "/school-logos/vibgyor.png" },
  { name: "Kalpa Academy", logo: "/school-logos/kalpa.png" },
  { name: "Podar International", logo: "/school-logos/podar.png" },
  { name: "Ryan International", logo: "/school-logos/ryan.png" },
];

const SchoolEngagement = () => {
  return (
    <section className="marquee-section">
      <div className="marquee-header">
        <span className="marquee-label">OUR Partners</span>
        <h2 className="marquee-title">Trusted by India's leading schools</h2>
      </div>

      <div className="marquee-track-wrap">
        {/* fade edges */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-track">
          {/* duplicate for seamless loop */}
          {[...schools, ...schools].map((school, i) => (
            <div className="marquee-item" key={i}>
              <img
                src={school.logo}
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

export default SchoolEngagement;