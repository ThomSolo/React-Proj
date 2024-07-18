import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

// Import images and documents
import image1 from "../../assets/images/Top-5-Java-IDE-Infographic-2024.png";
import image2 from "../../assets/images/LL-CapStone-proj.PNG";
import document1 from "../../assets/documents/EDIT-abbreviated-Resume-by-Solomon-Thomas-2024.pdf";
import document2 from "../../assets/documents/2024-Cover-Letter-by-Solomon.pdf";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio] = useState([
    {
      name: "Infographic",
      description: "This was an Infographic that was done some time ago.",
      type: "image",
      src: image1,
      url: image1, // Use the image path directly
    },
    {
      name: "My Resume",
      description: "A slimmed down version of my resume. It's not full.",
      type: "pdf",
      src: document1,
      url: document1, // Use the document path directly
    },
    {
      name: "CapStone Project",
      description: "This is a Screenshot of a Capstone Project I did with a group.",
      type: "image",
      src: image2,
      url: image2, // Use the image path directly
    },
    {
      name: "Cover Letter",
      description: "My Most recent cover letter.",
      type: "pdf",
      src: document2,
      url: document2, // Use the document path directly
    },
    {
      name: "Video Tutorial",
      description: "This is a video tutorial that I did with a group.",
      type: "embed",
      url: "https://www.youtube.com/embed/OAR4x93ITv0",
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="content-container">
        {portfolio.map((port, idx) => (
          <div className="content-box" key={idx}>
            {port.type === "image" && (
              <img src={port.src} className="portfolio-content" alt={port.name} />
            )}
            {port.type === "pdf" && (
              <embed src={port.src} className="portfolio-content" type="application/pdf" />
            )}
            {port.type === "embed" && (
              <div className="embed-content">
                <div className="video-wrapper">
                  <iframe
                    title={port.name}
                    width="100%"
                    height="100%"
                    src={port.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            <div className="content">
              <p className="title">{port.name}</p>
              <h4 className="description">{port.description}</h4>
              {port.type !== "embed" && (
                <button className="btn" onClick={() => window.open(port.url, '_blank')}>
                  View
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={15} />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
