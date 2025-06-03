import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './MobileServiceSection.css';

const MobileServiceSection = ({ cardData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardProperties = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('.mobile-service-card');
      if (!cards.length) return;

      container.style.setProperty('--cards-count', cards.length);
      container.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
    };

    // Initial setup
    updateCardProperties();

    // Handle resize
    window.addEventListener('resize', updateCardProperties);

    // Cleanup
    return () => window.removeEventListener('resize', updateCardProperties);
  }, []);

  return (
    <div className="mobile-services" ref={containerRef}>
      {cardData.map((card) => (
        <div key={card.id} className="mobile-service-card">
          <div className="mobile-card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <h2 className="mobile-card-title">{card.title}</h2>
          <p className="mobile-card-content">{card.content}</p>
          <div className="mobile-card-gradient"></div>
        </div>
      ))}
    </div>
  )
};

MobileServiceSection.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MobileServiceSection;