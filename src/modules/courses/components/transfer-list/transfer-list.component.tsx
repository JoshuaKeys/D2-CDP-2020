import React from 'react';
import { TransferListPropsModel } from '../../models/TransferListPropsModel';
import './transfer-list.component.scss'
export function TransferList(props: TransferListPropsModel) {
    return (
        <div className="transfer-list">
            <span className="transfer-list__label">List of authors</span>
            <div className="transfer-list__widget">
                <div className="transfer-list__widget-left-field"></div>
                <div className="transfer-list__widget-controls">
                    <button className="transfer-list__widget-control">{'>'}</button>
                    <button className="transfer-list__widget-control">{'<'}</button>
                </div>
                <div className="transfer-list__widget-right-field"></div>
            </div>
        </div>
    );
}

TransferList.propTypes = {
    
}