import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Footer from "./components/Footer/Footer";
import CTASection from "./components/CTASection/CTASection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProgramSection from "./components/ProgramSection/ProgramSection";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import StorytellingSection from "./components/StorytellingSection/StorytellingSection";
import SchoolPartnerSection from "./components/SchoolPartnerSection/SchoolPartnerSection";
import PublishedBooksSection from "./components/PublishedBooksSection/PublishedBooksSection";
import FeaturedStory from "./components/FeaturedStory/FeaturedStory";
import SchoolsMarquee from "./components/SchoolsMarquee/SchoolsMarquee";
import Testimonials from "./components/Testimonials/Testimonials";
import SchoolPartnerBanner from "./components/SchoolPartnerBanner/SchoolPartnerBanner";
import NewsSection from "./components/NewsSection/NewsSection";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import AchieversSection from "./components/AchieversSection/AchieversSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ContestSection from "./components/ContestSection/ContestSection";
import SchoolEngagement from "./components/SchoolEngagement/SchoolEngagement";

//return
function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProgramSection />
      <CoursesSection />
      <StorytellingSection />
      <SchoolPartnerSection />
      <PublishedBooksSection />

      <FeaturedStory />
      <NewsSection />
      <ContestSection />
      <CommunitySection />
      <AchieversSection />
      <GallerySection />
      <SchoolsMarquee />
      <SchoolEngagement />
      <SchoolPartnerBanner />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
