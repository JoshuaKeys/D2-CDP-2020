import React from 'react';
import { FormInputPropsModel } from '../../models/FormInputPropsModel';
import  PropTypes from 'prop-types';
import './form-input.component.scss';

export function FormInput (props: FormInputPropsModel) {
    let inputType;
    if(props.type === 'textarea') {
        inputType = <textarea onChange={props.onChange} name={props.name} value={props.value}/>
    }else {
        inputType = <input onChange={props.onChange}  type={props.type} name={props.name} value={props.value}/>
    }
    return (
        <div className="form-input">
            <label className="form-input__label" htmlFor={props.name}>{props.label}</label>
            {inputType}
        </div>
    );
}

FormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}