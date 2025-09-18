import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import InvestmentFocus from "@/components/InvestmentFocus";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Strategy from "@/components/Strategy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Approach />
      <InvestmentFocus />
      <Portfolio />
      <Team />
      <Strategy />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
