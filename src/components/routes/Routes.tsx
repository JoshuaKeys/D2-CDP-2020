import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import  Login  from '../../modules/auth-module/pages/login/login-page';
import { AuthModel } from '../../models/auth.model';
import  CoursesPage  from '../../modules/courses/pages/courses/courses-page';
import { CourseModel } from '../../modules/shared/models/Course.model';
import CreateEditPage from '../../modules/courses/pages/create-edit/create-edit.component';

export default function Routes(props: {courses: CourseModel[]}) {
    const auth:string= localStorage.getItem('user-auth') as string;
    let _auth: boolean;
    if(auth && auth.length > 0) {
        _auth = JSON.parse(auth);
    }else {
        _auth = false
    }
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={()=> <Login isAuthenticated={_auth} />}></Route>
                <Route path="/home" render={()=> <CoursesPage isAuthenticated={_auth} courses={props.courses}/>}/>
                <Route path="/edit-course" render={()=> <CreateEditPage />}/>
            </Switch>
        </Router>
    );
}