import './App.scss';
import React from 'react';
import { CourseModel } from './modules/shared/models/Course.model';
import { Routes } from './components/routes/Routes';
import { AppState, MatchParams } from './models/app-state.model';
import { ConnectedProps } from 'react-redux';
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { match } from 'react-router';
import { withBusinessLogic, connector } from './hocs/withBusinessLogic';
import { HocPropsModel } from './models/HocProps.model';

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteChildrenProps<MatchParams> & HocPropsModel;

export class App extends React.Component<Props, AppState> {
  componentDidMount = () => {
    this.props.checkLogin();
  }
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
