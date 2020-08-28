import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const InputField = ({ label, name, value, placeholder, type, onChange, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                className={classnames("form-control form-control-lg", {
                    "is-invalid": error 
                })}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

InputField.defaultProps = {
    name: 'project_url',
    label: 'Project URL',
    placeholder: '',
    type: 'text'
};

export default InputField;