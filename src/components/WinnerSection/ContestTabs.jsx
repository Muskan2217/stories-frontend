import "./ContestTabs.css";

const ContestTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="contest-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.slug}
          className={`contest-tab ${activeTab === tab.slug ? "active" : ""}`}
          onClick={() => onChange(tab.slug)}
        >
          {tab.icon && <span className="contest-tab-icon">{tab.icon}</span>}
          {tab.label.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ContestTabs;