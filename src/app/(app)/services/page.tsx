import ServicesSection from "@/components/ServicesSection";
import BackButton from "@/components/BackButton";

export default function Services() {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
      </div>
      <ServicesSection />
    </div>
  );
}