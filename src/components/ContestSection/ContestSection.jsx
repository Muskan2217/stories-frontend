import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "./ContestSection.css"; 

const TABS = ["Story Writing", "Reading Contest", "Poetry Contest"];

const medalColors = {
  GOLD: "medal-gold",
  SILVER: "medal-silver",
  BRONZE: "medal-bronze",
};

const Countdown = ({ closesAt }) => {
  const calc = () => {
    const diff = new Date(closesAt) - new Date();
    if (diff <= 0) return { days: 0, hrs: 0, min: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hrs: Math.floor((diff % 86400000) / 3600000),
      min: Math.floor((diff % 3600000) / 60000),
    };
  };

  const [time, setTime] = useState(calc());

  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 60000);
    return () => clearInterval(t);
  }, [closesAt]);

  return (
    <div className="countdown">
      {[
        ["days", time.days],
        ["hrs", time.hrs],
        ["min", time.min],
      ].map(([label, val]) => (
        <div className="countdown-block" key={label}>
          <span className="countdown-num">{String(val).padStart(2, "0")}</span>
          <span className="countdown-label">{label.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

const ContestSection = () => {
  const [contests, setContests] = useState([]);
  const [winners, setWinners] = useState([]);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  useEffect(() => {
    axios
      .get(API.contests)
      .then((res) => setContests(res.data))
      .catch((err) => console.error("Error fetching contests:", err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API.winners}?type=${encodeURIComponent(activeTab)}`)
      .then((res) => setWinners(res.data))
      .catch((err) => console.error("Error fetching winners:", err));
  }, [activeTab]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(contests.length - 1, c + 1));

  const contest = contests[current];

  return (
    <section className="contest-section">
      {/* LEFT — ONGOING CONTESTS */}
      <div className="contest-left">
        <div className="contest-left-header">
          <div className="contest-left-title">
            <span className="contest-trophy">🏆</span>
            <h3>Ongoing Contests</h3>
          </div>
          <a href="/contests" className="contest-view-all">
            VIEW ALL →
          </a>
        </div>

        {contest && (
          <div className="contest-card">
            <div className="contest-card-top">
              <span className="contest-category">{contest.category}</span>
            </div>

            <h2 className="contest-title">{contest.title}</h2>
            <p className="contest-desc">{contest.description}</p>

            <div className="contest-closes">
              <span className="contest-closes-label">
                ⏱ CLOSES IN{" "}
                {new Date(contest.closes_at) - new Date() > 0
                  ? `${Math.floor((new Date(contest.closes_at) - new Date()) / 86400000)} DAYS`
                  : "CLOSED"}
              </span>
            </div>

            <Countdown closesAt={contest.closes_at} />

            <a href={contest.btn_url} className="contest-join-btn">
              {contest.btn_label} →
            </a>
          </div>
        )}

        {/* DOTS */}
        <div className="contest-nav">
          <button className="contest-arrow" onClick={prev}>
            ‹
          </button>
          <div className="contest-dots">
            {contests.map((_, i) => (
              <span
                key={i}
                className={`contest-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button className="contest-arrow" onClick={next}>
            ›
          </button>
        </div>
      </div>

      {/* RIGHT — LATEST WINNERS */}
      <div className="contest-right">
        <div className="contest-right-header">
          <div className="contest-right-title">
            <span className="contest-medal-icon">🥇</span>
            <h3>Latest Winners</h3>
          </div>
          <a href="/winners" className="contest-view-all">
            WINNERS GALLERY →
          </a>
        </div>

        {/* TABS */}
        <div className="contest-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`contest-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Story Writing" && "📖 "}
              {tab === "Reading Contest" && "📚 "}
              {tab === "Poetry Contest" && "✏️ "}
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* WINNER LIST */}
        <div className="winners-list">
          {winners.map((winner) => (
            <div className="winner-row" key={winner.id}>
              <span className="winner-rank">{winner.rank}</span>
              <img
                src={winner.image_url}
                alt={winner.name}
                className="winner-img"
              />
              <div className="winner-info">
                <div className="winner-tags">
                  <span className="winner-type-tag">{winner.contest_type}</span>
                  <span
                    className={`winner-medal-tag ${medalColors[winner.medal]}`}
                  >
                    🏅 {winner.medal}
                  </span>
                </div>
                <h4 className="winner-name">{winner.name}</h4>
                <p className="winner-meta">
                  Age {winner.age} · "{winner.story_title}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestSection;
