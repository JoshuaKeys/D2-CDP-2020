import React, { Props, ChangeEvent } from 'react';
import { Header } from '../../../shared/components/header/header.component';
import { CreateEditPropsModel } from '../../models/CreateEditPropsModel';
import { FormInput } from '../../components/form-input/form-input.component';
import { Duration } from '../../components/duration/duration.component';
import { TransferList } from '../../components/transfer-list/transfer-list.component';
import './create-edit.component.scss'
import { withRouter } from 'react-router-dom';
import { CourseModel } from '../../../shared/models/Course.model';
import { DateFormatter } from '../../../shared/services/date-formater';

class CreateEditPage extends React.Component<CreateEditPropsModel, CourseModel>{
    user = 'user1';
    // state: CourseModel 
    dateFormatter = new DateFormatter();
    componentWillMount() {
        const state = this.props.location.state as {state: CourseModel} | null;
        if(state && Object.keys(state).length > 0) {
            this.setState({
                ...state.state
            })
        }else {
            this.setState({
                title: '',
                description: '',
            })
        }

    }
    onEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            title: e.target.value
        })
    }
    onEditDuration =() =>{

    }
    onEditDescription=()=> {
    }
    onDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            duration: parseInt(e.target.value) || 0
        })
    }
    onEditCreationDate = (e: ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            ...this.state,
            creationDate: this.dateFormatter.formatDotFormatToDate(e.target.value)
        })

    }
    render() {
        
        return (
            <article className="create-edit">
                <Header page="create-edit-page" course={this.props.course}>
                    {this.user}
                </Header>
                <form className="create-edit__form">
                    <FormInput name="title" onChange={this.onEditTitle} value={this.state.title} label="Title" type="text" />
                    <FormInput name="description" onChange={this.onEditDescription} value={this.state.description} label="Description" type="textarea" />
                    <FormInput name="creationDate" onChange={this.onEditCreationDate} value={
                        this.state.creationDate ?
                        this.dateFormatter.formatDateToDotFormat(this.state.creationDate):
                        undefined
                        } label="Creation Date" type="text" />
                    <Duration duration ={
                        this.state.duration ? 
                        this.state.duration:
                        undefined
                    } onChange={this.onDurationChange}/>
                    <TransferList />
                    <div className="create-edit__form-btns">
                        <button className="create-edit__form-btn">Save</button>
                        <button className="create-edit__form-btn">Cancel</button>
                    </div>
                </form>
            </article>
        );
    }
}
export default withRouter(CreateEditPage);