import './App.scss';
import React from 'react';
import { CourseModel } from './modules/shared/models/Course.model';
import { Routes } from './components/routes/Routes';
import { CourseService } from './modules/courses/services/course.service';
import { HttpClient } from './modules/shared/services/httpClient';
import { AuthorsService } from './modules/courses/services/authors.service';
import { AuthorModel } from './modules/shared/models/Author.model';
import { AppState } from './models/app-state.model';
export class App extends React.Component<{}, AppState> {
  componentDidMount = () => {
    var coursesService = new CourseService(new HttpClient());
    var authorsService = new AuthorsService(new HttpClient());
    coursesService.getCourses<CourseModel[]>().then(({ body }) => {
      this.setState({
        ...this.state,
        courses: {
          ...this.state,
          authors: this.state && this.state.courses ? this.state.courses.authors : [],
          courses: [...body],
        }

      })
    });
    authorsService.getAuthors<AuthorModel[]>().then(({body})=>{
      const state = {
        courses: {
          ...this.state,
          authors: [...body],
          courses: this.state && this.state.courses ? this.state.courses.courses : []
        }
      }
      this.setState({
        ...this.state,
        ...state
      })
    })
  }
  onUpdateCourse(course: CourseModel) {
    var courseService = new CourseService(new HttpClient())
    courseService.updateCourse(course).then(
        response => {
            if (response.status === 200) {
              const courses = [...this.state.courses?.courses as CourseModel[]].map(item=> {
                if(item.id === course.id) {
                  return course;
                }else {
                  return item;
                }
              })
              this.setState({
                courses: {
                  ...this.state,
                  ...this.state.courses,
                  courses
                }
              })
            }
        }
    )
  }
  onAddCourse(course: CourseModel) {
    var coursesService = new CourseService(new HttpClient());
    coursesService.addCourse<CourseModel>(course).then(({body}) => {
      let updatedCourses = [...this.state.courses?.courses as CourseModel[]];
      updatedCourses.push(body)
      this.setState({
        ...this.state,
        courses: {
          ...this.state,
          authors: this.state && this.state.courses ? this.state.courses.authors : [],
          courses: [...updatedCourses],
        }

      })
    });
  }
  onDeleteCourse(course: CourseModel) {
    var coursesService = new CourseService(new HttpClient());
    coursesService.deleteCourse<{}>(course).then(() => {
      let updatedCourses = [...this.state.courses?.courses as CourseModel[]];
      let courseIdx = updatedCourses.findIndex(item=> item.id === course.id);
      updatedCourses.splice(courseIdx, 1)
      this.setState({
        ...this.state,
        courses: {
          ...this.state,
          authors: this.state && this.state.courses ? this.state.courses.authors : [],
          courses: [...updatedCourses],
        }

      })
    });
  }
  render() {
    return (
      <article className="app">
        <div className="app__container">
          <Routes 
            state={this.state}
            updateCourse={(course: CourseModel)=> this.onUpdateCourse(course)}
            deleteCourse={(course: CourseModel)=> this.onDeleteCourse(course)}
            addCourse={(course: CourseModel)=> this.onAddCourse(course)}></Routes>
        </div>
      </article>
    );
  }
}

export default App;
