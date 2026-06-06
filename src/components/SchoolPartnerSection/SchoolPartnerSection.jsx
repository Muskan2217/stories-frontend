import "./SchoolPartnerSection.css";

const features = [
  {
    icon: "🏛",
    title: "Branding Opportunity",
    text: "Position your school as a leader in literary education.",
  },
  {
    icon: "📖",
    title: "School Story Book",
    text: "An annually published book authored by your students.",
  },
  {
    icon: "👥",
    title: "Student Engagement",
    text: "Workshops, contests & sessions that energize classrooms.",
  },
  {
    icon: "✦",
    title: "Creative Ecosystem",
    text: "Build a culture of writing, reading & expression.",
  },
];

const SchoolPartnerSection = () => {
  return (
    <section className="school">
      {/* LEFT */}
      <div className="school-left">
        <span className="school-badge">FOR SCHOOLS</span>

        <h2 className="school-title">
          Partner With India's Leading Children's Publishing Platform
        </h2>

        <p className="school-desc">
          Bring world-class literary programs to your school and unlock
          measurable creative outcomes for every student.
        </p>

        <div className="school-img-wrap">
          <img
            src="/school-images/school.jpg"
            alt="School Partnership"
            className="school-img"
          />
        </div>

        <a href="/partner" className="school-btn">
          Partner With Us →
        </a>
      </div>

      {/* RIGHT */}
      <div className="school-right">
        <div className="school-grid">
          {features.map((f, i) => (
            <div className="school-card" key={i}>
              <div className="school-card-icon">{f.icon}</div>
              <h4 className="school-card-title">{f.title}</h4>
              <p className="school-card-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolPartnerSection;