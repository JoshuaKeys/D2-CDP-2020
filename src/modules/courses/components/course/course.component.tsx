import React from 'react';
import './course.component.scss';
import PropTypes from 'prop-types';
import { CoursePropsModel } from '../../models/CoursePropsModel';
import { formatDurationData } from '../../../shared/helpers/format-duration-data.helper';

function formatDateData(date: string) {
    const _date = new Date(date);
    let dateStr = _date.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '-');
    return dateStr;
}

export function Course(props: CoursePropsModel) {
    return (
        <article className="course">
            <section className="course__top-section">
                <div className="course__top-section-group course__top-section-group--1">
                    <h1 className="course__heading">{props.course.title}</h1>
                    <span>{formatDurationData(props.course.duration)}</span>
                </div>
                <div className="course__top-section-group course__top-section-group--2">
                    <span>{formatDateData(props.course.creationDate)}</span>
                    <button className="course__action-btn" onClick={()=> props.editCourse(props.course)}>Edit Course</button>
                </div>

            </section>
            <section className="course__bottom-section">
                <span className="course__description">{props.course.description}</span>
                <button className="course__action-btn" onClick={()=> props.deleteCourse(props.course)}>Delete Course</button>
            </section>
        </article>
    )
}

Course.propTypes = {
    course: PropTypes.shape({
        title: PropTypes.string,
        duration: PropTypes.number,
        creationDate: PropTypes.string,
        description: PropTypes.string
    })
}