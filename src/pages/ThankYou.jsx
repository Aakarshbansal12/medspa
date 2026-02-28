import { Link } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="thank-you">
      <div className="container">
        <h1>Thank You!</h1>
        <p>We've received your appointment request.</p>
        <p>We'll contact you within 24 hours to confirm your booking.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
}

export default ThankYou;