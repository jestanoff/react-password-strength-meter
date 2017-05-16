import React from 'react';
import PropTypes from 'prop-types';

const PasswordField = (props) => (
    <div className='password-field__container'>
        <input type='password' onChange={ props.handleChange } className='password-field' />
        { props.children }
    </div>
);

PasswordField.propTypes = {
    handleChange: PropTypes.func.isRequired,
};

export default PasswordField;
