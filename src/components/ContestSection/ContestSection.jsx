import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { API, apiClient } from "../../config/api";
import AgeGroupTabs from "./AgeGroupTabs";
import ContestCard from "./ContestCard";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import EmptyState from "../EmptyState/EmptyState";
import "./ContestSection.css";

const AGE_GROUPS = [
  { label: "All", slug: null, icon: "🌟" },
  { label: "7-10 Years", slug: "7-10-years", icon: "🧒" },
  { label: "11-14 Years", slug: "11-14-years", icon: "👦" },
  { label: "15-18 Years", slug: "15-18-years", icon: "🧑" },
];

const ContestSection = () => {
  const [ageGroup, setAgeGroup] = useState(AGE_GROUPS[0].slug);
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await apiClient.get(API.contests, {
          params: {
            ...(ageGroup ? { age_group: ageGroup } : {}),
            status: "ongoing",
          },
        });
        setContests(res.data.data || []);
      } catch (err) {
        setError("Failed to load contests.");
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
  }, [ageGroup]);

  return (
    <section className="contest-section">
      <div className="contest-intro">
        <div className="contest-badge">✨ CONTEST & RESULTS</div>

        <h2>Celebrating Young Voices</h2>

        <p className="contest-sub-heading">
          Discover ongoing contests, meet our latest winners, and find your
          child's next stage to shine.
        </p>
        <div className="devider"></div>
      </div>
      <div className="contest-section-header">
        <h2>🏆 Ongoing Contests</h2>
        <a href="/contests" className="view-all-link">
          VIEW ALL CONTESTS →
        </a>
      </div>

      <AgeGroupTabs
        ageGroups={AGE_GROUPS}
        activeAgeGroup={ageGroup}
        onChange={setAgeGroup}
      />

      {loading && <LoadingSkeleton count={3} type="contest" />}

      {error && (
        <EmptyState icon="⚠️" title="Something went wrong" message={error} />
      )}

      {!loading && !error && contests.length === 0 && (
        <EmptyState
          icon="🏆"
          title="No contests yet"
          message="No contests available for this age group yet."
        />
      )}

      {!loading && !error && contests.length > 0 && (
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          loop={contests.length > 4}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: Math.min(2, contests.length) },
            1024: { slidesPerView: Math.min(4, contests.length) },
          }}
        >
          {contests.map((contest) => (
            <SwiperSlide key={contest.id}>
              <ContestCard contest={contest} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ContestSection;
