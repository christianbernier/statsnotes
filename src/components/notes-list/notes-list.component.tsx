import React, { FC } from 'react';
import { Note } from '../../models/note';

import './notes-list.component.css';
import { NotesListItem } from '../notes-list-item/notes-list-item.component';

export interface NotesListParams {
  notes: Note[];
  selected: string;
}

export const NotesList: FC<NotesListParams> = (params) => {
  return (
    <div className="notes-list--container">
      <h1 className="notes-list--header">
        <a href="/" className="notes-list--back-link">
          ←
        </a>
        All notes
      </h1>
      <div className="notes-list--scroll-wrapper">
        <div className="notes-list--items-container">
          {params.notes.map((note: Note) => (
            <NotesListItem
              key={`notes-list--item-key-${note.id}`}
              note={note}
              selected={params.selected === note.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
