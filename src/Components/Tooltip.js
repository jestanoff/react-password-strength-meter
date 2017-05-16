import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ children, position }) => (
    <div className={ `tooltip tooltip--${ position }`}>
        { children }
    </div>
);

Tooltip.propTypes = {
    children: React.PropTypes.node.isRequired,
    position: PropTypes.string,
};

Tooltip.defaultProps = {
    position: 'left',
};

export default Tooltip;
