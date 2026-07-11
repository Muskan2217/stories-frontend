import "./QuickActions.css";
import { FaBookOpen, FaPenNib, FaTrophy, FaArrowRight } from "react-icons/fa";
import ReadIcon from "../../assets/quickactions/read.png";
import WriteIcon from "../../assets/quickactions/write.png";
import ContestIcon from "../../assets/quickactions/contest.png";

const actions = [
  {
    icon: <img src={ReadIcon} alt="Read Stories" />,
    title: "Read Stories",
    text: "Explore amazing stories written by young authors.",
    btn: "Read Stories",
    link: "/stories",
    primary: false,
  },
  {
    icon: <img src={WriteIcon} alt="Write Stories" />,
    title: "Write Stories",
    text: "Share your imagination with the world. Login or sign up to get started.",
    btn: "Write Stories",
    link: "/login",
    primary: true,
  },
  {
    icon: <img src={ContestIcon} alt="Join Contest" />,
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