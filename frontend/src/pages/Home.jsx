import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../storeing-data/auth";
import "./pages.css";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const HOST = import.meta.env.REACT_APP_HOST;
const PORT = import.meta.env.REACT_APP_PORT;

import image1 from "../assets/sliders images/image1.jpg";
import image2 from "../assets/sliders images/image2.jpg";
import image3 from "../assets/sliders images/image3.jpg";
import image4 from "../assets/sliders images/image4.jpg";
import image5 from "../assets/sliders images/image5.jpg";
import Categories from "../components/Categories";
import { RecomendedProducts } from "../components/RecomendedProducts";
import { Footer } from "../components/Footer";

const Home = () => {
  const { user, business, loading } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingImages, setLoadingImages] = useState(true);
  const navigate = useNavigate();

  const slides = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

  const slideChangingTimer = 4000;

  useEffect(() => {
    const preloadImages = async () => {
      const promises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => {
            console.log(`Image loaded: ${slide.image}`);
            resolve();
          };
          img.onerror = (error) => {
            console.error(`Error loading image: ${slide.image}`, error);
            reject(error);
          };
        });
      });

      try {
        await Promise.all(promises);
        setLoadingImages(false);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideChangingTimer);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      try {
        const response = await fetch(`${HOST}:${PORT}/api/search/?query=${value}`);
        const data = await response.json();
        const formattedSuggestions = data.suggestions.map((suggestion) => {
          if (suggestion.type === "product") {
            return { ...suggestion, type: "product" };
          } else if (suggestion.type === "business") {
            return { ...suggestion, type: "business" };
          } else if (suggestion.type === "category") {
            return { ...suggestion, type: "category" };
          } else {
            return null;
          }
        });
        const validSuggestions = formattedSuggestions.filter((suggestion) => suggestion !== null);
        setSuggestions(validSuggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    switch (suggestion.type) {
      case "product":
        navigate(`/product/${suggestion._id}`);
        break;
      case "business":
        navigate(`/business/${suggestion._id}`);
        break;
      case "category":
        navigate(`/category/${suggestion._id}`);
        break;
      default:
        break;
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      <div className="page">
        {loading || loadingImages ? (
          <div className="center">Loading...</div>
        ) : (
          <>
            <div className="d-clmn">
              <div className="search-hero">
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Add an img tag for fallback rendering */}
                  <img
                    src={slides[currentSlide].image}
                    alt={`Slide ${currentSlide + 1}`}
                    style={{ display: 'none' }}
                  />
                </div>
                <input
                  type="text"
                  className="search"
                  placeholder="Search for Items, events, categories and more..."
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                {suggestions.length > 0 && (
                  <div className="suggestions">
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="suggestion-item"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {renderSuggestionText(suggestion)}
                      </div>
                    ))}
                  </div>
                )}
                <div className="slider-buttons">
                  <button className="prev-btn" onClick={handlePrevSlide}><GoChevronLeft /></button>
                  <button className="next-btn" onClick={handleNextSlide}><GoChevronRight /></button>
                </div>
              </div>
            </div>
            <Categories />
            <RecomendedProducts />
            <div className="search-hero">
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
};

const renderSuggestionText = (suggestion) => {
  switch (suggestion.type) {
    case "product":
      return suggestion.name || suggestion.description;
    case "business":
      return suggestion.businessname || suggestion.about || suggestion.address;
    case "category":
      return suggestion.name;
    default:
      return "";
  }
};

export default Home;
