import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../modules/auth-module/pages/login/login-page';
import CoursesPage from '../../modules/courses/pages/courses/courses-page';
import CreateEditPage from '../../modules/courses/pages/create-edit/create-edit.component';
import { AppState } from '../../models/app-state.model';
import { CourseModel } from '../../modules/shared/models/Course.model';
import { RoutesPropsModel } from '../../models/RoutesPropsModel';

export class Routes extends React.Component<RoutesPropsModel> {
    auth: string = localStorage.getItem('user-auth') as string;
    _auth = false;
    state = {
        courses: this.props.state ? this.props.state.courses : []
    }
    componentWillReceiveProps(props:any) {
        this.setState({courses: props.courses})
    }
    render() {
        if (this.auth && this.auth.length > 0) {
            this._auth = JSON.parse(this.auth);
        } else {
            this._auth = false
        }
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Login isAuthenticated={this._auth} />}></Route>
                    <Route path="/home" render={() => 
                        <CoursesPage 
                            courses={this.props.state && this.props.state.courses ? this.props.state.courses.courses : []}
                            authors={this.props.state && this.props.state.courses ? this.props.state.courses.authors : []}
                            deleteCourse={(course: CourseModel)=> this.props.deleteCourse(course)}

                    />} />
                    <Route path="/edit-course" render={() => 
                        <CreateEditPage 
                        updateCourse={(course: CourseModel)=>this.props.updateCourse(course)}
                        addCourse={(course: CourseModel)=> this.props.addCourse(course)}
                        />} />
                </Switch>
            </Router>
        );
    }
}