import "./SchoolPartnerBanner.css";

const SchoolPartnerBanner = () => {
  return (
    <section className="partner-banner-wrap">
      <div className="partner-banner">
        <span className="partner-banner-icon">✦</span>
        <h2 className="partner-banner-title">
          Bring Stories By Children <br /> to Your School
        </h2>
        <p className="partner-banner-desc">
          Join 200+ partner schools building the next generation of
          confident, creative writers.
        </p>
        <a href="/partner" className="partner-banner-btn">
          Become a Partner School →
        </a>
      </div>
    </section>
  );
};

export default SchoolPartnerBanner;