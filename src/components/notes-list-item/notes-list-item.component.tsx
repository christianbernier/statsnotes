import React, { FC } from 'react';
import { Note } from '../../models/note';

import './notes-list-item.component.css';

export interface NotesListItemParams {
  note: Note;
  selected: boolean;
}

export const NotesListItem: FC<NotesListItemParams> = (params) => {
  const goToNote = (noteId: string): void => {
    window.location.href = `/note/${noteId}`;
  };

  return (
    <button
      className="notes-list-item"
      id={`notes-list-item--id-${params.note.id}`}
      data-selected={params.selected}
      onClick={() => goToNote(params.note.id)}
    >
      {params.note.title}
    </button>
  );
};
