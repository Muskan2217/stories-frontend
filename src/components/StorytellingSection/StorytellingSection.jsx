import "./StorytellingSection.css";



// static section ---- StorytellingSection

const features = [
  { icon: "📅", text: "Weekly live sessions, every weekend" },
  { icon: "👥", text: "Small batches for personal attention" },
  { icon: "✨", text: "Props, costumes & imagination tools" },
];

const StorytellingSection = () => {
  return (
    <section className="storytelling">
      {/* LEFT */}
      <div className="storytelling-left">
        <span className="storytelling-badge">✦ FOR AGES 4–8</span>

        <h2 className="storytelling-title">
          Storytelling Sessions <br /> That Spark Imagination
        </h2>

        <p className="storytelling-desc">
          Weekly immersive sessions packed with props, voices, and magic.
          Where every child becomes part of the story.
        </p>

        <ul className="storytelling-features">
          {features.map((f, i) => (
            <li key={i} className="storytelling-feature">
              <span className="storytelling-feature-icon">{f.icon}</span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>

        <a href="/book-session" className="storytelling-btn">
          Book a Session
        </a>
      </div>

      {/* RIGHT */}
      <div className="storytelling-right">
        <div className="storytelling-img-wrap">
          <img
            src="/storytelling-images/storytelling.jpg"
            alt="Storytelling Sessions"
            className="storytelling-img"
          />
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;