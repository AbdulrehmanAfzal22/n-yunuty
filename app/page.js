import Navbar from "../app/page/navbar/page.jsx";
import Hero from "../app/page/hero/page.jsx";
import AboutSection from "./page/about/page.jsx";
import Feature from "./page/feature/page.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Feature/>
    </>
  );
}
