import React from 'react';
import './course-filter.component.scss'
import { CourseModel } from '../../../shared/models/Course.model';
import { CourseFilterPropsModel } from '../../models/CourseFilterPropsModel';

export function CourseFilter(props: CourseFilterPropsModel) {
    const filterRef = React.createRef<HTMLInputElement>();
    return (
        <form className="course-filter">
            <div className="course-filter__container">
                <input className="course-filter__input" ref={filterRef} placeholder="Search by title" />
                <button className="course-filter__search-btn" type="button" onClick={()=> props.onFilter(filterRef.current ? filterRef.current.value: '')}>Search</button>
            </div>
        </form>
    );
}