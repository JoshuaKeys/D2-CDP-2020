import React, { Props } from 'react';
import { Header } from '../../../shared/components/header/header.component';
import { CreateEditPropsModel } from '../../models/CreateEditPropsModel';
import { FormInput } from '../../components/form-input/form-input.component';
import { Duration } from '../../components/duration/duration.component';
import { TransferList } from '../../components/transfer-list/transfer-list.component';
import './create-edit.component.scss'

export class CreateEditPage extends React.Component<CreateEditPropsModel>{
    user = 'user1';
    onDurationChange = () => {}
    render() {
        return (
            <article className="create-edit">
                <Header page="create-edit-page" course={this.props.course}>
                    {this.user}
                </Header>
                <form className="create-edit__form">
                    <FormInput name="title" label="Title" type="text" />
                    <FormInput name="description" label="Description" type="textarea" />
                    <FormInput name="creationDate" label="Creation Date" type="text" />
                    <Duration onChange={this.onDurationChange} />
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