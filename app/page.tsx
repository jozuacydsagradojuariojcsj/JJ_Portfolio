import Background from "./components/backgrounds/Background";
import Layout from "./components/layout/Layout";
import Menu from "./components/layout/Menu";
import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="h-full flex flex-col items-center justify-center">
          <HeroSection />
        </div>
      </Layout>
    </>
  );
}
