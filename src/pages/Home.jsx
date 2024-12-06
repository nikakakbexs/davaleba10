import React, { useEffect } from "react";
import Header from "../components/Header";
import "./styles/Home.css";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".hidden-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <div className="links">
            <a href="/projects" className="btn">
              View Projects
            </a>
            <a href="/hobby" className="btn">
              Explore Hobbies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
