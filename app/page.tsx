import Hero from "./sections/Hero";
import ServicesPreview from "./sections/servicespreview";
import PortfolioPreview from "./sections/portfoliopreview";
import ClientsSection from "./sections/clients";
import StatsSection from "./sections/statssection";
import FloatingContact from "./components/FloatingContact";

export default function Home() {
  return (
    <main>
      <Hero />

      <ServicesPreview />

      <PortfolioPreview />

      <ClientsSection />

      <StatsSection />

      <FloatingContact />
    </main>
  );
}
