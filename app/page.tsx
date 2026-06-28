import Background from "./components/backgrounds/Background";
import Layout from "./components/layout/Layout";
import Menu from "./components/layout/Menu";
import AboutMeSection from "./components/sections/AboutMeSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-full w-full flex flex-col overflow-y-auto scrollbar-none">
        <HeroSection />
        <AboutMeSection />
        <ProjectSection />
      </main>
    </Layout>
  );
}
