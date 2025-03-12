import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";
import "../styles/Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="gallery-loading">Loading gallery...</div>;
  if (error) return <div className="gallery-error">Error loading gallery: {error}</div>;
  if (images.length === 0) return <div className="gallery-empty">No images found in the gallery.</div>;

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <ModalImage
              small={`https://goldenjapanllc.com/${img}`}
              large={`https://goldenjapanllc.com/${img}`}
              alt={`Gallery Image ${index + 1}`}
              hideDownload={true}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;