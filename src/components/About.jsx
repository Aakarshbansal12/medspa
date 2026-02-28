import React from 'react';
import './Navbar.css'; // We'll use the styles from Navbar.css

function About() {
  return (
    <section id="about" >
      <div className="about-container">
        <h1>About <span>GlowMedSpa</span></h1>
        <p className="subtitle">Where Science Meets Beauty</p>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our <span>Story</span></h2>
            <p>
              Founded in 2015, GlowMedSpa has been at the forefront of medical aesthetics, 
              combining cutting-edge technology with personalized care. Our mission is to 
              help you look and feel your best through safe, effective, and innovative treatments.
            </p>
            <p>
              What started as a small clinic with a vision has grown into a premier medical spa 
              destination. We believe that everyone deserves to feel confident in their own skin, 
              and we're here to make that happen with our team of expert practitioners and 
              state-of-the-art facilities.
            </p>
            <p>
              At GlowMedSpa, we don't just treat symptoms – we enhance your natural beauty 
              while ensuring your comfort and safety every step of the way. Our holistic approach 
              to wellness and aesthetics sets us apart in the industry.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="GlowMedSpa Clinic Interior"
            />
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15k+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Expert Practitioners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Advanced Treatments</div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our <span>Expert Team</span></h2>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Dr. Sarah Johnson"
              />
              <h3>Dr. Sarah Johnson</h3>
              <div className="position">Medical Director</div>
              <p className="bio">Board-certified dermatologist with 15+ years of experience in aesthetic medicine.</p>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Dr. Michael Chen"
              />
              <h3>Dr. Michael Chen</h3>
              <div className="position">Lead Aesthetic Physician</div>
              <p className="bio">Specializes in advanced laser treatments and minimally invasive procedures.</p>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Emma Rodriguez"
              />
              <h3>Emma Rodriguez</h3>
              <div className="position">Head Aesthetician</div>
              <p className="bio">Expert in skincare treatments and custom facial therapies.</p>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Dr. James Wilson"
              />
              <h3>Dr. James Wilson</h3>
              <div className="position">Wellness Specialist</div>
              <p className="bio">Integrates holistic wellness with aesthetic treatments for optimal results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;