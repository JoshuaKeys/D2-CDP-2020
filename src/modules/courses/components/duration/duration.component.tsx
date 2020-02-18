import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../form-input/form-input.component';
import { formatDurationData } from '../../../shared/helpers/format-duration-data.helper';
import { DurationPropsModel } from '../../models/DurationPropsModel';
import './duration.component.scss';

export function Duration(props: DurationPropsModel) {
    return (
        <div className="duration">
            <FormInput label="Duration" type="text" onChange={props.onChange} value={props.duration ? props.duration.toString(): props.duration}/>
            <span className="duration__formated-value">{props.duration ? formatDurationData(props.duration) : ''}</span>
        </div>

    );
}

Duration.propTypes = {
    onChange: PropTypes.func
}