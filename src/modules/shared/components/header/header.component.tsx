import React from 'react';
import PropTypes from 'prop-types';
import './header.component.scss';
import { HeaderPropsModel } from '../../models/HeaderProps.model';
import { NavLink } from 'react-router-dom';

function Header(props: HeaderPropsModel) {
    let projectedContent = null;
    if (props.page === 'courses-page') {
        projectedContent = (
            <nav className="header__nav">
                <span className="header__user-name">{props.children}</span>
                <a href="#">Logout</a>
            </nav>
        );
    }
    if (props.page === 'create-edit-page') {
        let course = '';
        if (props.course && props.course.title !== '') {
            course = props.course.title
        } else {
            course = 'New course'
        }
        projectedContent = (
            <div className="header__nav-container">
                <div className="header__breadcrumb"><NavLink to="/home">Courses</NavLink> > {course}</div>
                <nav className="header__nav">
                    <span className="header__user-name">{props.children}</span>
                    <a href="#">Logout</a>
                </nav>
            </div>

        );
    }
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/home">
                    <div className="header__logo-container">
                        <img className="header__logo" src="/logo.png" />
                        <h1 className="header__logo-text">Logo</h1>
                    </div>
                </NavLink>

                {projectedContent}
            </div>
        </header>
    )
}


Header.propTypes = {
    page: PropTypes.string,
    course: PropTypes.shape({
        title: PropTypes.string,
        duration: PropTypes.number,
        creationDate: PropTypes.instanceOf(Date),
        description: PropTypes.string,
    }),
    children: PropTypes.string
};

export { Header };