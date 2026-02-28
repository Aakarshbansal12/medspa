import './BeforeAfter.css';
import beforebotox from '../images/beforebotox.png';
import afterbotox from '../images/afterbotox.png';
import beforefiller from '../images/beforefiller.png';
import afterfiller from '../images/afterfiller.png';
import beforelaser from '../images/beforelaser.png';
import afterlaser from '../images/afterlaser.png';


function BeforeAfter() {
  const images = [
    { id: 1, before: beforebotox, after: afterbotox, treatment: 'Botox' }, // Using beforebotox for both temporarily
    { id: 2, before: beforefiller, after: afterfiller, treatment: 'Fillers' },
    { id: 3, before: beforelaser, after: afterlaser, treatment: 'Laser' }
  ];

  return (
    <section id="results" className="before-after">
      <div className="container">
        <h2 className="section-title">Real Results, Real People</h2>
        <div className="gallery">
          {images.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="image-container">
                {/* Before Image */}
                <div className="image-box">
                  <img src={item.before} alt={`${item.treatment} Before`} />
                  <span className="label">Before</span>
                </div>
                
                {/* After Image */}
                <div className="image-box">
                  <img src={item.after} alt={`${item.treatment} After`} />
                  <span className="label">After</span>
                </div>
              </div>
              <p className="treatment-name">{item.treatment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;