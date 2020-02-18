import './App.scss';
import React from 'react';
import { Header } from './modules/shared/components/header/header.component';
import CoursesPage  from './modules/courses/pages/courses/courses-page'
import { CourseModel } from './modules/shared/models/Course.model';
import Routes from './components/routes/Routes';
import { LoginService } from './modules/auth-module/services/login.service';
export class App extends React.Component {
  courses: CourseModel[] = [
    {
      title: 'Course 1',
      duration: 60 * 15 + 315,
      creationDate: new Date('2018-12-11'),
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'+
      ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '+
      'ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      title: 'Course 2',
      duration: 60 * 75 + 40,
      creationDate: new Date('2018-1-16'),
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'+
      ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '+
      'ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      title: 'Course 3',
      duration: 60 * 175 + 50,
      creationDate: new Date('2018-2-1'),
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'+
      ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '+
      'ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      title: 'Course 4',
      duration: 60 * 90 + 35,
      creationDate: new Date('2019-11-05'),
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'+
      ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '+
      'ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    }
  ]
  componentDidMount() {
    // var loginService = new LoginService(new HttpClient())
    //     loginService.loginUser(loginPayload).then(
    //         response=> {
    //             if(response.status === 200) {
    //                 localStorage.setItem('user-auth', 'true');
    //                 this.props.history.push('/home')
    //             }
    //         }
    //     )
  }
  render() {
    return (
      <article className="app">
        <div className="app__container">
          {/* <Login></Login> */}
          {/* <CoursesPage courses={this.courses}></CoursesPage> */}
          {/* <CreateEditPage course={this.courses[0]}></CreateEditPage> */}
          <Routes courses={this.courses}></Routes>
        </div>
      </article>
    );
  }
}

export default App;
