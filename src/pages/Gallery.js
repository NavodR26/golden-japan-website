import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../styles/Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log("Fetching gallery images...");
    fetch("https://goldenjapanllc.com/gallery/gallery.php")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received image paths:", data);
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Function to open lightbox with specific image
  const openLightbox = (index) => {
    console.log("Opening lightbox with index:", index);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (loading) {
    return (
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-loading">
          {Array(6).fill(0).map((_, index) => (
            <div key={`skeleton-${index}`} className="skeleton-item" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-error">
          <p>Error loading gallery: {error}</p>
          <button 
            className="gallery-retry-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-empty">
          <p>No images found in the gallery</p>
        </div>
      </div>
    );
  }

  // Prepare slides for lightbox
  const slides = images.map((img) => ({
    src: `https://goldenjapanllc.com/${img}`,
    alt: "Gallery Image"
  }));

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03, 
              transition: { duration: 0.2 } 
            }}
          >
            <div 
              className="gallery-image-container"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View image ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <img
                src={`https://goldenjapanllc.com/${img}`}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-zoom-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox component */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={closeLightbox}
          slides={slides}
          index={currentImageIndex}
          plugins={[Zoom, Thumbnails]}
          thumbnails={{
            position: "bottom",
            width: 120,
            height: 80,
            gap: 12,
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            thumbnail: { borderRadius: "4px" },
          }}
        />
      )}
    </div>
  );
};

export default Gallery;