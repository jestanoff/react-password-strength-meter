import React from 'react';
import PropTypes from 'prop-types';
import { PASSWORD_STRENGHT } from '../constants';

const PasswordStrenghtMeter = ({ score }) => {
    const style = {
        width: `${score * 25}%`,
    };

    return (
        <div className='password-strenght-meter'>
            <p>Password Strenght: { PASSWORD_STRENGHT[score] }</p>
            <div className='proggress-bar__container'>
                <div className='proggress-bar' style={ style }></div>
            </div>
        </div>
    );
};

PasswordStrenghtMeter.propTypes = {
    score: PropTypes.number.isRequired,
};

export default PasswordStrenghtMeter;
