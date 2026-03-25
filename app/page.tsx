import Hero from "./sections/Hero";
import ServicesPreview from "./sections/servicespreview";
import PortfolioPreview from "./sections/portfoliopreview";

import Contact from "./contact/page";

import Technology from "./technology/page";

export default function Home() {
  return (
    <main>
      <Hero />

      <ServicesPreview />

      <PortfolioPreview />

      <Technology />
      <Contact />
    </main>
  );
}
