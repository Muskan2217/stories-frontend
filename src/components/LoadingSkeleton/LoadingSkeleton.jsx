import "./LoadingSkeleton.css";

const LoadingSkeleton = ({ count = 3, type = "card" }) => {
  return (
    <div className="skeleton-wrapper">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`skeleton-item skeleton-${type}`}>
          <div className="skeleton-image" />
          <div className="skeleton-line skeleton-line-title" />
          <div className="skeleton-line skeleton-line-text" />
          <div className="skeleton-line skeleton-line-text short" />
          <div className="skeleton-button" />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;