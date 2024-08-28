import React, { useState } from 'react';
import './GalleryImg.css'; // Assuming you have corresponding styles

const GalleryImg = () => {
  const media = [
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/1.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/2.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/3.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/4.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/5.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/6.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/7.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/8.jpg' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' }, // Example video
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/certificate/certificate1.png' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' }, // Another example video
    // Add more images and videos as needed
  ];



  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const changeMedia = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex >= media.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = media.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  const updateMainMedia = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <br />
      <hr /><h1><center>Gallery</center></h1><hr />
      <div className="gallery">
        {media.map((item, index) => (
          item.type === 'image' ? (
            <img
              key={index}
              src={item.src}
              alt={`Image ${index + 1}`}
              onClick={() => openLightbox(index)}
            />
          ) : (
            <video
              key={index}
              src={item.src}
              controls
              onClick={() => openLightbox(index)}
              style={{ cursor: 'pointer' }}
            />
          )
        ))}
      </div>

      {isLightboxOpen && (
        <div id="lightbox">
          <span id="close-btn" onClick={closeLightbox}>&times;</span>
          {media[currentIndex].type === 'image' ? (
            <img id="lightbox-img" src={media[currentIndex].src} alt="lightbox image" />
          ) : (
            <video id="lightbox-video" src={media[currentIndex].src} controls autoPlay />
          )}
          <div id="thumbnail-container">
            {media.map((item, index) => (
              item.type === 'image' ? (
                <img
                  key={index}
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${currentIndex === index ? 'active-thumbnail' : ''}`}
                  onClick={() => updateMainMedia(index)}
                />
              ) : (
                <video
                  key={index}
                  src={item.src}
                  className={`thumbnail ${currentIndex === index ? 'active-thumbnail' : ''}`}
                  onClick={() => updateMainMedia(index)}
                  style={{ cursor: 'pointer' }}
                />
              )
            ))}
          </div>
          <button id="prev-btn" onClick={() => changeMedia(-1)}>&lt; 👈 </button>
          <button id="next-btn" onClick={() => changeMedia(1)}>👉 &gt;</button>
        </div>
      )}
    </div>
  );
};

export default GalleryImg;
