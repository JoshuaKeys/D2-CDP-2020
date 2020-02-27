import React, { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { Header } from '../../../shared/components/header/header.component';
import { CreateEditPropsModel } from '../../models/CreateEditPropsModel';
import { FormInput } from '../../components/form-input/form-input.component';
import { Duration } from '../../components/duration/duration.component';
import { TransferList } from '../../components/transfer-list/transfer-list.component';
import './create-edit.component.scss'
import { withRouter } from 'react-router-dom';
import { DateFormatter } from '../../../shared/services/date-formater';
import { CoursePropsModel } from '../../models/CoursePropsModel';
import { AuthorModel } from '../../../shared/models/Author.model';
import { CourseModel } from '../../../shared/models/Course.model';

class CreateEditPage extends React.Component<CreateEditPropsModel, CoursePropsModel>{
    user = 'user1';
    dateFormatter = new DateFormatter();
    mode: string = '';
    error: string = '';

    validateCourseInputs = (course: CourseModel) => {
        const title = typeof (course.title) === 'string' && course.title.trim().length > 0 ? course.title.trim() : false;
        const description = typeof (course.description) === 'string' && course.description.trim().length > 0 ? course.description.trim() : false;
        const creationDate = typeof (course.creationDate) === 'string' && course.creationDate.trim().length > 0 ? course.creationDate.trim() : false;
        const duration = typeof (course.duration) === 'number' && course.duration > 0 ? course.duration : false;
        const author = typeof (course.authors) === 'object' ? course.authors : false;

        if (title && description && creationDate && duration && author) {
            return { error: undefined};
        } else {
            return { error: 'Invalid Data Entered' }
        }
    }
    resetState = () => {
        const state = this.props.location.state as { state: CoursePropsModel } | null;
        if (state && Object.keys(state.state).length > 1) {
            const __state = {
                course: { ...state.state.course },
                authors: state.state.authors
            }
            this.setState(__state)
        } else {
            const __state = {
                course: {
                    id: '',
                    title: '',
                    creationDate: '',
                    duration: 0,
                    description: '',
                    authors: []
                },
                authors: state && state.state ? state.state.authors : [],

            }
            this.setState(__state)
            this.mode = 'add'
        }
    }
    componentWillMount() {
        this.resetState();
    }
    onEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            error: undefined,
            course: {
                ...this.state.course,
                title: e.target.value
            }
        })
    }
    onEditDuration = () => {

    }
    onEditDescription = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            error: undefined,
            course: {
                ...this.state.course,
                description: e.target.value
            }
        })
    }
    onDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            error: undefined,
            course: {
                ...this.state.course,
                duration: parseInt(e.target.value) || 0
            }

        })
    }
    onEditCreationDate = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            error: undefined,
            course: {
                ...this.state.course,
                creationDate: e.target.value
            }
        })

    }
    onUpdateAuthors = (authors: AuthorModel[]) => {
        const state = {
            ...this.state,
            error: undefined,
            course: {
                ...this.state.course,
                authors: [
                    ...authors
                ]
            },
        }
        this.setState(state);
    }
    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.mode === 'add') {
            const error = this.validateCourseInputs(this.state.course)
            if (error.error === undefined) {
                this.props.addCourse(this.state.course);
            } else {
                this.setState({
                    error: error.error as string
                })
            }

        } else {
            this.props.history.push('/home')
            this.props.updateCourse(this.state.course);
        }
    }
    onCancel = (e: MouseEvent<HTMLButtonElement>) => {
        this.props.history.push('/home')
    }

    render() {
        let error;
        if(this.state.error === undefined) {
            error = undefined;
        }else {
            error = <p className="create-edit__form-error">{this.state.error as string}</p>
        }
  
        return (
            <article className="create-edit">
                <Header page="create-edit-page" logout={this.props.logout} course={this.state.course}>
                    {this.user}
                </Header>
                <form className="create-edit__form" onSubmit={this.onSubmit}>
                    {error}
                    <FormInput name="title" onChange={this.onEditTitle} value={this.state.course.title} label="Title" type="text" />
                    <FormInput name="description" onChange={this.onEditDescription} value={this.state.course.description} label="Description" type="textarea" />
                    <FormInput name="creationDate" onChange={this.onEditCreationDate} value={
                        this.state.course.creationDate ?
                            this.dateFormatter.formatDate(this.state.course.creationDate) : undefined
                    } label="Creation Date" type="date" />
                    <Duration duration={
                        this.state.course.duration ?
                            this.state.course.duration :
                            undefined
                    } onChange={this.onDurationChange} />
                    <TransferList
                        updateAuthors={(authors) => this.onUpdateAuthors(authors)}
                        allAuthors={this.state.authors ? this.state.authors : []}
                        courseAuthors={this.state.course.authors}
                    />
                    <div className="create-edit__form-btns">
                        <button className="create-edit__form-btn">Save</button>
                        <button className="create-edit__form-btn" type="button" onClick={this.onCancel}>Cancel</button>
                    </div>
                </form>
            </article>
        );
    }
}
export default withRouter(CreateEditPage);