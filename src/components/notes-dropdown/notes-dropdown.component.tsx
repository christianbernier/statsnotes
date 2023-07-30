import React, { FC } from 'react';
import { Note } from '../../models/note';

import './notes-dropdown.component.css';

export interface NotesDropdownParams {
  notes: Note[];
}

export const NotesDropdown: FC<NotesDropdownParams> = (params) => {
  const noteSelected = (noteId: string): void => {
    window.location.href = `/note/${noteId}`;
  };

  return (
    <div className="notes-dropdown--container">
      <span>Notes about</span>
      <select
        className="notes-dropdown--select"
        onChange={(event) => noteSelected(event.target.value)}
      >
        {params.notes.map((note: Note) => (
          <option key={`notes-dropdown--item-key-${note.id}`} value={note.id}>
            {note.title}
          </option>
        ))}
      </select>
    </div>
  );
};
