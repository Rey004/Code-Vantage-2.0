import './Herotext.css'
import PropTypes from 'prop-types'

const HeroText = (props) => {
  return (
    <div className={props.textType}>
      <div className="hero-above">
         <div className='hero-above-left'>
            <div className="text-container">
                <div className="text-wrapper">
                    <div className="crafting-text">CRAFTING</div>
                </div>
                <div className="text-wrapper">
                    <div className="your-text">YOUR</div>
                </div>
            </div>
         </div>
      </div>
      <div className="hero-below">
        <div className='hero-below-right'>
            <div className="text-container">
                <div className="text-wrapper">
                    <div className="web-text">WEB</div>
                </div>
                <div className="text-wrapper">
                    <div className="presence-text">PRESENCE</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

HeroText.propTypes = {
  textType: PropTypes.string
}

export default HeroText;