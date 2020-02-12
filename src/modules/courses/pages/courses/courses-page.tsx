import React, { Component } from 'react';
import { Header } from '../../../shared/components/header/header.component'
import { CoursesPropsModel } from '../../models/CoursesPropsModel';
import { Course } from '../../components/course/course.component';
import { CourseFilter } from '../../components/course-filter/course-filter.component';
import PropTypes from 'prop-types';
import './courses-page.scss';
export function CoursesPage(props: CoursesPropsModel) {
    const user = 'user1';
    let courses = props.courses.map((course, idx) => {
        return <li className="courses-page__item" key={idx}><Course course={course}></Course></li>
    })

    return (
        <article>
            <Header page='courses-page'>
                {user}
            </Header>
            <div className="courses-page__mid-section">
                <CourseFilter />
                <button className="courses-page__delete-course-btn">Delete Course</button>
            </div>
            <div>
                <ul className="courses-page__items">
                    {courses}
                </ul>
            </div>
        </article>
    )
}

CoursesPage.propType = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        duration: PropTypes.number,
        creationDate: PropTypes.instanceOf(Date),
        description: PropTypes.string
    }))
}