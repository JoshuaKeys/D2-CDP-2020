import React, { Component } from 'react';
import { Header } from '../../../shared/components/header/header.component'
import { CoursesPropsModel } from '../../models/CoursesPropsModel';
import { Course } from '../../components/course/course.component';
import { CourseFilter } from '../../components/course-filter/course-filter.component';
import './courses-page.scss';
import { CourseModel } from '../../../shared/models/Course.model';
import { withRouter } from 'react-router-dom';

class CoursesPage extends Component<CoursesPropsModel> {
    user = 'user1';
    courses: CourseModel[] = [];
    state = {
        filter: ''
    }
    onEditCourse = (course: CourseModel) => {
        this.props.history.push('/edit-course', { state: { course, authors: this.props.authors } })
    }
    onFilterCourses = (filter: string) => {
        this.setState({ filter });
    }
    onAddCourse = () => {
        this.props.history.push('/edit-course', { state: { authors: this.props.authors } })
    }
    render() {
        let courses;
        if (this.props.courses) {
            courses = this.props.courses.filter((course, idx) => {//courses.filter((course, idx)=>{
                return course.title.search(this.state.filter) > -1 ? true : false;
            }).map((course, idx) => {
                return <li className="courses-page__item" key={idx}>
                    <Course
                        deleteCourse={(course: CourseModel) => this.props.deleteCourse(course)}
                        editCourse={(course: CourseModel) => this.onEditCourse(course)}
                        course={course}></Course></li>
            })
        }

        return (
            <article>
                <Header page='courses-page' logout={this.props.logout}>
                    {this.user}
                </Header>
                <div className="courses-page__mid-section">
                    <CourseFilter onFilter={(filter) => this.onFilterCourses(filter)} />
                    <button className="courses-page__delete-course-btn" onClick={this.onAddCourse}>Add Course</button>
                </div>
                <div>
                    <ul className="courses-page__items">
                        {courses}
                    </ul>
                </div>
            </article>
        )
    }

}

export default withRouter(CoursesPage)