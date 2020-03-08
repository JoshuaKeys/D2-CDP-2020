import './App.scss';
import React from 'react';
import { CourseModel } from './modules/shared/models/Course.model';
import { Routes } from './components/routes/Routes';
import { AppState, MatchParams } from './models/app-state.model';
import { ConnectedProps } from 'react-redux';
// import { loadCourses, addCourse, deleteCourse, updateCourse } from './modules/courses/redux/actions'
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { match } from 'react-router';
// import { checkLogin, loginUser, logoutUser } from './modules/auth-module/redux/actions'
// import { LoginFormModel } from './modules/auth-module/models/login-form.model';
import { withBusinessLogic, connector } from './hocs/withBusinessLogic';
import { HocPropsModel } from './models/HocProps.model';

// const mapState = (state: AppState) => ({
//   courses: state.courses,
//   auth: state.auth
// });
// const mapDispatch = {
//   loadCourses,
//   checkLogin,
//   loginUser,
//   addCourse,
//   deleteCourse,
//   updateCourse,
//   logoutUser
// }
// const connector = connect(
//   mapState,
//   mapDispatch
// )
// type PropsFromHOC = 
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteChildrenProps<MatchParams> & HocPropsModel;

export class App extends React.Component<Props, AppState> {
  componentDidMount = () => {
    this.props.checkLogin();
  }
  // onUpdateCourse(course: CourseModel) {
  //   this.props.updateCourse(course);
  // }
  // onAddCourse(course: CourseModel) {
  //   this.props.addCourse({...course, history: this.props.history});
  // }
  // getCourses() {
  //   this.props.loadCourses();
  // }
  // onDeleteCourse(course: CourseModel) {
  //   this.props.deleteCourse(course);
  // }
  // onLogin = (loginPayload: LoginFormModel) => {
  //   this.props.loginUser({...loginPayload, history: this.props.history});
  // }
  // onLogout = ()=>{
  //   const history = this.props.history
  //   this.props.logoutUser(history);
  // }
  render() {
    const _match = this.props.match as match<MatchParams>;
    const state: AppState = {
      ...this.props,
      auth: this.props.auth,
      match: _match,
      courses: {
        courses: this.props.courses?.courses,
        authors: this.props.courses?.authors
      }
    }
    return (
      <article className="app">
        <div className="app__container">
          <Routes 
            logout={this.props.onLogout}
            state={state}
            login={(loginPayload)=> this.props.onLogin(loginPayload)}
            updateCourse={(course: CourseModel)=> this.props.onUpdateCourse(course)}
            deleteCourse={(course: CourseModel)=> this.props.onDeleteCourse(course)}
            addCourse={(course: CourseModel)=> this.props.onAddCourse(course)}></Routes>
        </div>
      </article>
    );
  }
}

export default withRouter(withBusinessLogic(App));
