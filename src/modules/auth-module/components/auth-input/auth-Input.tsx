import React from 'react';
import './auth-input.scss';
import { Input } from '../../models/input.model';
import PropTypes from 'prop-types';
export function AuthInput(props: Input) {
    const classes = ['auth-input__input-field'];
    if(props.fieldError !== '') {
        classes.push('auth-input__has-error')
    }
    return (
        <div className="auth-input">
            <label className="auth-input__label">{props.label}</label>
            <input
                className={classes.join(' ')}
                value={props.value} name={props.name}
                onBlur={props.onBlur}
                onChange={props.onInput}
                type={props.type}/>
            <span className="auth-input__field-error">{props.fieldError}</span>
        </div>
    )
}

AuthInput.propTypes = {
    label: PropTypes.string,
    fieldError: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onInput: PropTypes.func,
    onBlur: PropTypes.func
}