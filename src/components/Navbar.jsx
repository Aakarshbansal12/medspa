import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const isManuallyScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only track scroll position on home page
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      // If we're manually scrolling (due to link click), don't update active section
      if (isManuallyScrolling.current) {
        return;
      }

      // IMPORTANT: These IDs must match exactly with the IDs in your components
      const sections = [
        { id: 'about', name: 'about' },
        { id: 'services', name: 'services' },
        { id: 'results', name: 'results' },
        { id: 'testimonials', name: 'testimonials' },
        { id: 'offer', name: 'offer' },
        { id: 'appointment', name: 'appointment' }
      ];
      
      // Check if user is at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isBottom) {
        setActiveSection('appointment');
        return;
      }

      // Check if user is at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('about');
        return;
      }

      // Find which section is most visible in the viewport
      let maxVisibleSection = null;
      let maxVisibleArea = 0;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Calculate visible area percentage
          const totalHeight = rect.height;
          const visiblePercentage = (visibleHeight / totalHeight) * 100;
          
          // Consider the section's position in viewport
          const distanceFromTop = Math.abs(rect.top - 100); // Target offset 100px from top
          
          // Weight the visibility based on both visible area and proximity to top
          const visibilityScore = visiblePercentage * 2 - distanceFromTop / 10;
          
          if (visiblePercentage > 20 && visibilityScore > maxVisibleArea) {
            maxVisibleArea = visibilityScore;
            maxVisibleSection = section.name;
          }
        }
      }

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    // Check initial active section on page load
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [location.pathname]);

  // Handle smooth scroll when clicking nav links
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Set manual scrolling flag
      isManuallyScrolling.current = true;
      
      // Update URL hash without page jump
      window.history.pushState(null, '', `#${sectionId}`);
      
      // Set active section immediately
      setActiveSection(sectionId);
      
      // Scroll to element
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Clear the manual scrolling flag after scroll completes
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        isManuallyScrolling.current = false;
      }, 1000); // Adjust time based on scroll duration
    }
  };

  // Check URL hash on mount and hash changes
  useEffect(() => {
    if (location.pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        // Map hash to display name if needed
        const hashToDisplay = {
          'about': 'about',
          'services': 'services',
          'results': 'results',
          'testimonials': 'testimonials',
          'offer': 'offer',
          'appointment': 'appointment'
        };
        
        setActiveSection(hashToDisplay[hash] || hash);
        
        // Scroll to the section after a small delay
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            isManuallyScrolling.current = true;
            element.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
              isManuallyScrolling.current = false;
            }, 1000);
          }
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="GlowMedSpa" className="logo-image" />
          <span className="logo-text">GlowMedSpa</span>
        </Link>
        <div className="nav-links">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a 
            href="#results" 
            onClick={(e) => handleNavClick(e, 'results')}
            className={activeSection === 'results' ? 'active' : ''}
          >
            Results
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className={activeSection === 'testimonials' ? 'active' : ''}
          >
            Testimonials
          </a>
          <a 
            href="#offer" 
            onClick={(e) => handleNavClick(e, 'offer')}
            className={activeSection === 'offer' ? 'active' : ''}
          >
            Special Offer
          </a>
          <a 
            href="#appointment" 
            onClick={(e) => handleNavClick(e, 'appointment')}
            className={activeSection === 'appointment' ? 'active' : ''}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;