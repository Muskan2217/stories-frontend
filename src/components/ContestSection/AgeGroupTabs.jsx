import "./AgeGroupTabs.css";

const AgeGroupTabs = ({ ageGroups, activeAgeGroup, onChange }) => {
  return (
    <div className="age-group-tabs">
      {/* <span className="filter-label">Filter by Age Group</span> */}
  
      {ageGroups.map((group) => (
        <button
          key={group.slug ?? "all"}
          className={`age-group-pill ${
            activeAgeGroup === group.slug ? "active" : ""
          }`}
          onClick={() => onChange(group.slug)}
        >
          {group.icon && <span className="age-group-icon">{group.icon}</span>}
          {group.label}
        </button>
      ))}
    </div>
  );
};

export default AgeGroupTabs;