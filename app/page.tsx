import Background from "./components/backgrounds/Background";
import Menu from "./components/layout/Menu";
import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Background>
        <Navbar />

        <div className="z-10 w-full h-full flex">
          <HeroSection />
        </div>
      </Background>
    </>
  );
}
