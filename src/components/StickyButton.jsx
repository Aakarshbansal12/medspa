import './StickyButton.css';

function StickyButton() {
  const handleClick = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="sticky-book-btn" onClick={handleClick}>
      Book Now
    </button>
  );
}

export default StickyButton;