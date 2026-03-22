import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ScrollReset from "./components/ScrollReset";

export default function Home() {
  return (
    <>
      <ScrollReset />
      <SplashScreen />
      <main>
        <Nav />
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Sponsors />
        <Team />
        <Volunteer />
        <Footer />
      </main>
    </>
  );
}
