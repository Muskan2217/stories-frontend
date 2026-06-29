import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote: "My daughter went from being shy about writing to confidently calling herself an author. SBC is magical.",
    name: "Priya Sharma",
    role: "Parent of Aanya, age 11",
    image_url: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    quote: "The Word Ninjas program transformed how my son approaches storytelling. He now reads and writes every single day.",
    name: "Rahul Mehta",
    role: "Parent of Arjun, age 9",
    image_url: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "Our school partnered with SBC and the results were incredible. Students were publishing real books within months.",
    name: "Mrs. Sunita Rao",
    role: "Principal, Heritage School Bangalore",
    image_url: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    quote: "I never thought I could write a book. Now I have one on Amazon with my name on it. Dreams do come true!",
    name: "Kavya R.",
    role: "Student author, age 12",
    image_url: "https://randomuser.me/api/portraits/women/22.jpg"
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="testimonials">
      {/* HEADER */}
      <div className="testimonials-header">
        <span className="testimonials-badge">TESTIMONIALS</span>
        <h2 className="testimonials-title">
          Loved by Parents, Schools & Children
        </h2>
      </div>

      {/* CARD */}
      <div className="testimonials-card">
        <span className="testimonials-quote-icon">"</span>

        <p className="testimonials-quote" key={current}>
          "{t.quote}"
        </p>

        {/* LEFT-RIGHT META (No extra wrapper div) */}
        <div className="testimonials-meta">
          {t.image_url && (
            <img src={t.image_url} alt={t.name} className="testimonials-avatar" />
          )}
          <div className="testimonials-author">
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="testimonials-nav">
          <button className="testimonials-arrow" onClick={prev}>
            ‹
          </button>

          <div className="testimonials-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`testimonials-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <button className="testimonials-arrow" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;