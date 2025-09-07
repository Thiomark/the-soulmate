import Header from "../components/Header";
import PulsingGradientCircle from "../components/PulsingGradientCircle";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PulsingGradientCircle />
      <ServicesSection />
      <Footer />
    </div>
  );
}
