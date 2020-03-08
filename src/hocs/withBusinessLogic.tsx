import React from 'react';
import { CourseModel } from '../modules/shared/models/Course.model';
import { LoginFormModel } from '../modules/auth-module/models/login-form.model';
import { loadCourses, addCourse, deleteCourse, updateCourse } from '../modules/courses/redux/actions'
import { checkLogin, loginUser, logoutUser } from '../modules/auth-module/redux/actions'
import { AppState } from '../models/app-state.model';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { coursesStateSelector } from '../modules/courses/redux/reducer';
import { authStateSelector } from '../modules/auth-module/redux/reducer';
const mapState = (state: AppState) => ({
    courses: coursesStateSelector(state),
    auth: authStateSelector(state)
  });
  const mapDispatch = {
    loadCourses,
    checkLogin,
    loginUser,
    addCourse,
    deleteCourse,
    updateCourse,
    logoutUser
  }
  export const connector = connect(
    mapState,
    mapDispatch
  )

export const withBusinessLogic = (WrappedComponent: any) => {
    class HOC extends React.Component<any, any> {
        onUpdateCourse = (course: CourseModel)=> {
            console.log(this.props);
            this.props.updateCourse(course);
        }
        onAddCourse = (course: CourseModel) => {
            this.props.addCourse({ ...course, history: this.props.history });
        }
        getCourses = () =>{
            this.props.loadCourses();
        }
        onDeleteCourse =(course: CourseModel)=> {
            this.props.deleteCourse(course);
        }
        onLogin = (loginPayload: LoginFormModel) => {
            
            this.props.loginUser({ ...loginPayload, history: this.props.history });
        }
        onLogout = () => {
            const history = this.props.history
            this.props.logoutUser(history);
        }
        render() {
            return (
                <WrappedComponent
                    onUpdateCourse = {this.onUpdateCourse}
                    onAddCourse={this.onAddCourse}
                    getCourses={this.getCourses}
                    onDeleteCourse={this.onDeleteCourse}
                    onLogin={this.onLogin}
                    onLogout={this.onLogout}
                    {...this.props}
                />
            )
        }
    }
    return connector(HOC);
}
export default compose(connector, withBusinessLogic);