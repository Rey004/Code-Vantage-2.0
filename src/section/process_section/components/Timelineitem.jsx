import PropTypes from 'prop-types';

const Timelineitem = (props) => {
return (
    <div className={`timeline-item ti-${props.number}`}>
        <div className="timeline-left">
            <div className={`sticky-text-left timeline-trigger-${props.number}`}>
                <div className="timeline-step-number-text">{props.step}</div>
                <div className="timeline-step-number">{props.number}</div>
            </div>
        </div>

        <div className="timeline-center">
            <div className="timeline-arrow">
                <img src="/assets/AN-ICON.svg" alt="" />
            </div>
        </div>

        <div className="timeline-right">
            <div className="timeline-heading">
                <div>{props.heading}</div>
            </div>
            <div className="timeline-image">
                <div className="timeline-image-div">
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div className="timeline-description">
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    </div>
);
}

Timelineitem.propTypes = {
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    step: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Timelineitem;