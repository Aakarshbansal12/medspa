import { Droplet, Zap, Wind, Heart } from 'lucide-react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <Droplet size={40} />,
      title: 'Botox',
      description: 'Reduce fine lines and wrinkles for a refreshed look'
    },
    {
      icon: <Heart size={40} />,
      title: 'Fillers',
      description: 'Restore volume and enhance facial contours'
    },
    {
      icon: <Zap size={40} />,
      title: 'Laser Treatment',
      description: 'Advanced laser technology for skin rejuvenation'
    },
    {
      icon: <Wind size={40} />,
      title: 'Body Contouring',
      description: 'Non-surgical fat reduction and body sculpting'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <div className="grid-4">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;