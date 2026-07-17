import Hero from "@/components/home/Hero";
import PlatformExpertise from '@/components/home/PlatformExpertise';
import TechStack from "@/components/home/TechStack";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";


export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <Hero />
      <PlatformExpertise />
      <TechStack />
      <Services />
      <FeaturedProjects />
      <About />
      <Stats />
      <CTA />
    </main>
  );
}
