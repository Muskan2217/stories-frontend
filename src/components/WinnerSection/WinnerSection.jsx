import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { API, apiClient } from "../../config/api";
import ContestTabs from "./ContestTabs";
import WinnerCard from "./WinnerCard";
import WinnerBanner from "./WinnerBanner";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import EmptyState from "../EmptyState/EmptyState";
import "./WinnerSection.css";

const CONTEST_TABS = [
  { label: "Story Writing", slug: "story-writing", icon: "✏️" },
  { label: "Reading Contest", slug: "reading-contest", icon: "📖" },
  { label: "Poetry Contest", slug: "poetry", icon: "🖋️" },
];

const AGE_GROUPS = [
  { label: "7-10 Years", slug: "7-10-years" },
  { label: "11-14 Years", slug: "11-14-years" },
  { label: "15-18 Years", slug: "15-18-years" },
];

const WinnerSection = () => {
  const [contestType, setContestType] = useState(CONTEST_TABS[0].slug);
  const [ageGroup, setAgeGroup] = useState(AGE_GROUPS[0].slug);
  const [winners, setWinners] = useState([]);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [winnersRes, bannerRes] = await Promise.all([
          apiClient.get(API.winners, {
            params: { contest_category: contestType, age_group: ageGroup },
          }),
          apiClient.get(API.winnerBanner, {
            params: { contest_category: contestType, age_group: ageGroup },
          }),
        ]);

        setWinners(winnersRes.data.data || []);
        setBanner(bannerRes.data.data || null);
      } catch (err) {
        setError("Failed to load winners.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contestType, ageGroup]);

  const activeTabLabel = CONTEST_TABS.find(
    (t) => t.slug === contestType,
  )?.label;

  return (
    <section className="winner-section">
      <div className="winner-section-header">
        <h2>🏆 Latest Winners</h2>
        <p>
          Celebrating young storytellers, readers and poets across all age
          groups.
        </p>
        <a href="/winners" className="view-all-link">
          View All Winners →
        </a>
      </div>

      <ContestTabs
        tabs={CONTEST_TABS}
        activeTab={contestType}
        onChange={setContestType}
      />

      <div className="winner-filter-row">
        <h3 className="winner-filter-title">
          Winners of {activeTabLabel} Contest
        </h3>

        <div className="age-group-filter">
          <span>Age Group</span>
          {AGE_GROUPS.map((group) => (
            <button
              key={group.slug}
              className={`age-group-pill ${ageGroup === group.slug ? "active" : ""}`}
              onClick={() => setAgeGroup(group.slug)}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      {loading && <LoadingSkeleton count={3} type="winner" />}
      {error && (
        <EmptyState icon="⚠️" title="Something went wrong" message={error} />
      )}

      {!loading && !error && (
        <div className="winner-content-row">
          {winners.length === 0 ? (
            <EmptyState
              icon="🏅"
              title="No winners yet"
              message="No winners announced yet for this filter."
            />
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="winner-swiper"
            >
              {winners.map((winner) => (
                <SwiperSlide key={winner.id}>
                  <WinnerCard winner={winner} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <WinnerBanner banner={banner} />
        </div>
      )}
    </section>
  );
};

export default WinnerSection;
