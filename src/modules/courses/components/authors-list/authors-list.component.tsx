import React from 'react';
import { AuthorModel } from "../../../shared/models/Author.model";
import './authors-list.component.scss';

export function AuthorsList(props: { authors: AuthorModel[], currentlyActive: string, onSelect: (id: string) => void }) {
    let authors = props.authors.map(author => {
        let _class = 'authors-list__item';
        if(author.id === props.currentlyActive) {
            _class +=  ' authors-list__item-active';
        }
        return (
            <li className={_class}
                onClick={() => props.onSelect(author.id)}
                key={author.id}>
                {author.name}
            </li>)
    })
    return (
        <ul className="authors-list">
            {authors}
        </ul>
    );
}