import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-inner">
        <span className="cta-label">STORIES BY CHILDREN</span>
        <h2 className="cta-title">
          Every Child Has a Story <br /> Worth Publishing
        </h2>
        <p className="cta-desc">
          Begin the journey today. Whether your child wants to write, read, or
          just listen — there's a place for them here.
        </p>
        <div className="cta-btns">
          <a href="/contest" className="cta-btn-primary">Join Contest</a>
          <a href="/programs" className="cta-btn-outline">Explore Programs</a>
          <a href="/contact" className="cta-btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;