import "./QuickActions.css";
import { FaBookOpen, FaPenNib, FaTrophy, FaArrowRight } from "react-icons/fa";

const actions = [
  {
    icon: <FaBookOpen />,
    title: "Read Stories",
    text: "Explore amazing stories written by young authors.",
    btn: "Read Stories",
    link: "/stories",
    primary: false,
  },
  {
    icon: <FaPenNib />,
    title: "Write Stories",
    text: "Share your imagination with the world. Login or sign up to get started.",
    btn: "Write Stories",
    link: "/login",
    primary: true,
  },
  {
    icon: <FaTrophy />,
    title: "Join the Contest",
    text: "Participate in exciting contests and win amazing prizes.",
    btn: "Join the Contest",
    link: "/contests",
    primary: false,
  },
];

const QuickActions = () => {
  return (
    <section className="quick-actions">
      <div className="container">
        <div className="quick-grid">
          {actions.map((item, index) => (
            <div className="quick-card" key={index}>
              <div className="quick-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <a
                href={item.link}
                className={item.primary ? "quick-btn primary" : "quick-btn"}
              >
                {item.btn}
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;