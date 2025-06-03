import PropTypes from 'prop-types';

const Button = ({ name }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/codevantage-in/30min?background_color=242424&text_color=ffffff&primary_color=af00ff'
      });
    }
  };

  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;
