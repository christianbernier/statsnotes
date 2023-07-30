import React, { FC } from 'react';
import { Note } from '../../models/note';

import './notes-grid.component.css';
import { NotesListItem } from '../notes-list-item/notes-list-item.component';

export interface NotesGridParams {
  notes: Note[];
}

export const NotesGrid: FC<NotesGridParams> = (params) => {
  return (
    <div className="notes-grid--container">
      <div className="notes-grid--items-container">
        {params.notes.map((note: Note) => (
          <NotesListItem
            key={`notes-grid--item-key-${note.id}`}
            note={note}
            selected={false}
          />
        ))}
      </div>
    </div>
  );
};
