import React from 'react';
import './course-filter.component.scss'
export function CourseFilter() {
    return (
        <form className="course-filter">
            <div className="course-filter__container">
                <input className="course-filter__input" placeholder="Search by title" />
                <button className="course-filter__search-btn">Search</button>
            </div>
        </form>
    );
}