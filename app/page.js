import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import List from "./components/List";
import Properties from "./components/Properties";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Properties />
      <List />
      <Contact />
      <Footer />
    </>
  );
}
