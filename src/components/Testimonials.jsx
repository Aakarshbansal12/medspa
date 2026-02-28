import { Star } from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Amazing results! The staff was professional and made me feel comfortable throughout the procedure.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'Best decision I made. My skin looks 10 years younger and the recovery was quick.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Very professional clinic. The consultation was thorough and results exceeded expectations.'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;