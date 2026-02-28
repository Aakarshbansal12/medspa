import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';

function AppointmentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Botox',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree use kar rahe hain - simple, no backend
    fetch('https://formspree.io/f/mpqjnkvl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(() => {
      navigate('/thank-you');
    })
    .catch(error => {
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <h2 className="section-title">Book Your Free Consultation</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
            >
              <option value="Botox">Botox</option>
              <option value="Fillers">Fillers</option>
              <option value="Laser">Laser Treatment</option>
              <option value="Body Contouring">Body Contouring</option>
            </select>
          </div>
          
          <div className="form-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-submit">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;