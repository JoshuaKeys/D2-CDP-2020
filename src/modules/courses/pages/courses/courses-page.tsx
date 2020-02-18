import React, { Component } from 'react';
import { Header } from '../../../shared/components/header/header.component'
import { CoursesPropsModel } from '../../models/CoursesPropsModel';
import { Course } from '../../components/course/course.component';
import { CourseFilter } from '../../components/course-filter/course-filter.component';
import PropTypes from 'prop-types';
import './courses-page.scss';
import { CourseModel } from '../../../shared/models/Course.model';
import { withRouter } from 'react-router-dom';

class CoursesPage extends Component<CoursesPropsModel> {
    static propType = {
        courses: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            duration: PropTypes.number,
            creationDate: PropTypes.instanceOf(Date),
            description: PropTypes.string
        }))
    }
    user = 'user1';
    courses = this.props.courses.map((course, idx) => {
        return <li className="courses-page__item" key={idx}><Course editCourse={(course: CourseModel)=>this.onEditCourse(course)} course={course}></Course></li>
    })

    onEditCourse =(course: CourseModel)=> {
        this.props.history.push('/edit-course', {state: course})
    }
    onDeleteCourse() {

    }
    onAddCourse= ()=> {
        this.props.history.push('/edit-course')
    }
    onLogout() {

    }
    render() {
        return (
            <article>
                <Header page='courses-page'>
                    {this.user}
                </Header>
                <div className="courses-page__mid-section">
                    <CourseFilter />
                    <button className="courses-page__delete-course-btn" onClick={this.onAddCourse}>Add Course</button>
                </div>
                <div>
                    <ul className="courses-page__items">
                        {this.courses}
                    </ul>
                </div>
            </article>
        )
    }

}

export default withRouter(CoursesPage)