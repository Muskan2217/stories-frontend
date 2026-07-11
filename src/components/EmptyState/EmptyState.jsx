import "./EmptyState.css";

const EmptyState = ({
  title = "Nothing here yet",
  message = "Please check back later.",
  icon = "📭",
}) => {
  return (
    <div className="empty-state">
      <span className="empty-state-icon">{icon}</span>
      <h4 className="empty-state-title">{title}</h4>
      <p className="empty-state-message">{message}</p>
    </div>
  );
};

export default EmptyState;