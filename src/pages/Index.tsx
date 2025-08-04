import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrendingSection from "@/components/TrendingSection";
import CustomerSection from "@/components/CustomerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrendingSection />
      <CustomerSection />
      <Footer />
    </div>
  );
};

export default Index;
