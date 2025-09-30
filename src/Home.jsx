import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function HomePage() {
  return (
    <>
      {/* Navbar */} 
      <Navbar/>

      {/* Hero Section */} 
      <Hero/>

      {/* About Section */} 
      <About/>

      {/* Education Section */} 
      <Education/>

      {/* Experience Section */} 
      <Experience/>

      {/* Projects Section */} 
      <Projects/>

      {/* Skills Section */} 
      <Skills />

      {/* Contact Section */} 
      <Contact/>

      {/* Footer */}
      <Footer/>
    </>
  );
}
export default HomePage;