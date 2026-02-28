import './BeforeAfter.css';
import { useState, useEffect, useRef } from 'react';
import beforebotox from '../images/beforebotox.png';
import afterbotox from '../images/afterbotox.png';
import beforefiller from '../images/beforefiller.png';
import afterfiller from '../images/afterfiller.png';
import beforelaser from '../images/beforelaser.png';
import afterlaser from '../images/afterlaser.png';

function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const galleryRef = useRef(null);

  const images = [
    { id: 1, before: beforebotox, after: afterbotox, treatment: 'Botox' },
    { id: 2, before: beforefiller, after: afterfiller, treatment: 'Fillers' },
    { id: 3, before: beforelaser, after: afterlaser, treatment: 'Laser' }
  ];

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update active indicator on scroll
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || !isMobile) return;

    const handleScroll = () => {
      const scrollPosition = gallery.scrollLeft;
      const itemWidth = gallery.children[0]?.offsetWidth + 20; // width + gap
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(Math.min(newIndex, images.length - 1));
    };

    gallery.addEventListener('scroll', handleScroll);
    return () => gallery.removeEventListener('scroll', handleScroll);
  }, [isMobile, images.length]);

  // Scroll to specific item when indicator is clicked
  const scrollToItem = (index) => {
    if (!galleryRef.current || !isMobile) return;
    
    const itemWidth = galleryRef.current.children[0]?.offsetWidth + 20;
    galleryRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  return (
    <section id="results" className="before-after">
      <div className="container">
        <h2 className="section-title">Real Results, Real People</h2>
        
        {/* Gallery */}
        <div 
          className="gallery" 
          ref={galleryRef}
        >
          {images.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="image-container">
                {/* Before Image */}
                <div className="image-box">
                  <img 
                    src={item.before} 
                    alt={`${item.treatment} Before`}
                    loading="lazy"
                  />
                  <span className="label">Before</span>
                </div>
                
                {/* After Image */}
                <div className="image-box">
                  <img 
                    src={item.after} 
                    alt={`${item.treatment} After`}
                    loading="lazy"
                  />
                  <span className="label">After</span>
                </div>
              </div>
              <p className="treatment-name">{item.treatment}</p>
            </div>
          ))}
        </div>

        {/* Carousel Indicators - only show on mobile */}
        {isMobile && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => scrollToItem(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BeforeAfter;