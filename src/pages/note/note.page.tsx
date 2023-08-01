import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './note.page.css';
import { NotesList } from '../../components/notes-list/notes-list.component';
import { ALL_NOTES } from '../../fixtures/notes';
import { Note } from '../../models/note';
import { NoteContent } from '../../components/note-content/note-content.component';
import { NotesDropdown } from '../../components/notes-dropdown/notes-dropdown.component';

export const NotePage: FC = () => {
  const { noteId } = useParams();
  const [selectedNote, setSelectedNote] = useState('');

  useEffect(() => {
    if (!noteId) {
      window.location.href = '/not-found';
      return;
    }

    const note = ALL_NOTES.find((note: Note) => note.id === noteId);
    if (!note) {
      window.location.href = '/not-found';
      return;
    }

    setSelectedNote(noteId);

    document.title = `${note.title} | Stats Notes`;

    // scroll the button into view
    const notesList = document.querySelector('.notes-list--scroll-wrapper');
    const button = document.querySelector(`#notes-list-item--id-${noteId}`);
    if (notesList && button) {
      notesList.scrollTo({ top: button.getBoundingClientRect().top - 100 });
    }
  }, [noteId]);

  return (
    <div id="note-page--container">
      <div className="note-page--note-list-container">
        <NotesList notes={ALL_NOTES} selected={selectedNote} />
      </div>
      <div className="note-page--note-list-dropdown-container">
        <NotesDropdown notes={ALL_NOTES} />
      </div>
      <div className="note-page--note-content-container">
        <NoteContent noteId={selectedNote} />
      </div>
    </div>
  );
};
