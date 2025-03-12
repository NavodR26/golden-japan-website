import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image"; // Lightbox library
import "../styles/Gallery.css"; // Import custom CSS for styling

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch image data from the PHP script
    fetch("https://goldenjapanllc.com/gallery/gallery.php")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.slice(0, 25).map((img, index) => (
          <div key={index} className="gallery-item">
            <ModalImage
              small={`https://goldenjapanllc.com/${img}`}
              large={`https://goldenjapanllc.com/${img}`}
              alt={`Gallery Image ${index + 1}`}
              hideDownload={true}
              imageBackgroundColor="transparent"
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
