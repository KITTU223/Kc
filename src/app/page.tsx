import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import PersonalTelemetry from "@/components/about/PersonalTelemetry";
import SelectedWork from "@/components/work/SelectedWork";
import Journey from "@/components/journey/Journey";
import F1Experience from "@/components/interests/F1Experience";
import CricketExperience from "@/components/interests/CricketExperience";
import GamingExperience from "@/components/interests/GamingExperience";
import TechStack from "@/components/tech/TechStack";
import Playground from "@/components/work/Playground";
import Philosophy from "@/components/layout/Philosophy";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-krut-bg selection:bg-krut-accent selection:text-white">
      <Navbar />
      <Hero />
      <PersonalTelemetry />
      <SelectedWork />
      <Journey />
      <F1Experience />
      <CricketExperience />
      <GamingExperience />
      <TechStack />
      <Playground />
      <Philosophy />
      <Contact />
    </main>
  );
}
