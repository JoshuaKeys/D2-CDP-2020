import React from 'react';
import { TransferListPropsModel } from '../../models/TransferListPropsModel';
import './transfer-list.component.scss'
import { AuthorsList } from '../authors-list/authors-list.component';
import { AuthorModel } from '../../../shared/models/Author.model';


export class TransferList extends React.Component<TransferListPropsModel, {currentlyActive: string, allAuthors: AuthorModel[], courseAuthors: AuthorModel[]}> {
    constructor(props: TransferListPropsModel) {
        super(props);
        this.state = {
            currentlyActive: '',
            courseAuthors: this.props.courseAuthors ? this.props.courseAuthors : [],
            allAuthors: this.props.allAuthors ? this.props.allAuthors : []
        }
    }
    onSelect = (id: string): void => {
        this.setState({currentlyActive: id})
    }
    filter(parentArray: AuthorModel[], childArray: AuthorModel[]) {
        if(childArray) {
            return parentArray ? parentArray.filter(item=>{
                const match = [];
                for(let i = 0; i < childArray.length; i++) {
                    if(item.id === childArray[i].id) {
                        match.push(childArray[i])
                    }
                }
                return match.length > 0 ? false : true;
            }) : [];
        }else {
            return parentArray;
        }
    }
    onAddAuthor= ()=> {
        const courseToBeAdded = this.state.allAuthors.find(item=> item.id === this.state.currentlyActive) as AuthorModel;
        if(this.state.courseAuthors) {
            const inCourse = this.state.courseAuthors.findIndex(item=> item.id === this.state.currentlyActive)
            if(this.state.currentlyActive !== '' && inCourse < 0) {
                const state = {
                    ...this.state,
                    courseAuthors: [
                        ...this.state.courseAuthors as AuthorModel[],
                        courseToBeAdded
                    ]
                }
                this.setState(state)
                this.props.updateAuthors(state.courseAuthors)
            }
        }else {
            const state = {
                ...this.state,
                courseAuthors: [
                    ...this.state.courseAuthors as AuthorModel[],
                    courseToBeAdded
                ]
            }
            this.setState(state)
            this.props.updateAuthors(state.courseAuthors)
        }

    }
    onRemoveAuthor = () => {
        const courseToBeRemoved = this.state.courseAuthors.find(item=> item.id === this.state.currentlyActive) as AuthorModel;
        if(courseToBeRemoved) {
            const inCourse = this.state.courseAuthors.findIndex(item=> item.id === this.state.currentlyActive)
            const courses = [...this.state.courseAuthors]
            courses.splice(inCourse, 1)
            if(this.state.currentlyActive !== '' && inCourse >= 0) {
                const state = {
                    ...this.state,
                    courseAuthors: [
                        ...courses
                    ]
                }
                this.setState(state)
                this.props.updateAuthors(state.courseAuthors)
            }
        }
        
    }
    render() {
        return (
            
            <div className="transfer-list">
                <span className="transfer-list__label">List of authors</span>
                <div className="transfer-list__widget">
                    <div className="transfer-list__widget-left-field">
                        <AuthorsList currentlyActive={this.state.currentlyActive} onSelect={(id)=>this.onSelect(id)} authors={this.filter(this.state.allAuthors, this.state.courseAuthors)}/>
                    </div>
                    <div className="transfer-list__widget-controls">
                        <button className="transfer-list__widget-control" type="button" onClick={this.onAddAuthor}>{'>'}</button>
                        <button className="transfer-list__widget-control" type="button" onClick={this.onRemoveAuthor}>{'<'}</button>
                    </div>
                    <div className="transfer-list__widget-right-field">
                        <AuthorsList currentlyActive={this.state.currentlyActive} onSelect={(id)=>this.onSelect(id)} authors={this.state.courseAuthors/*this.filter(this.state.courseAuthors, this.state.allAuthors)*/}/>
                    </div>
                </div>
            </div>
        );
    }
    
}