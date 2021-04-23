import React from 'react';
import PropTypes from 'prop-types';

export default function FeatureItem({ icon, alt, title, text }) {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}

FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
