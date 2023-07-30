import React, { FC, useEffect, useState } from 'react';
import { Note } from '../../models/note';
import { ALL_NOTES, NOTES_BASE_FILEPATH } from '../../fixtures/notes';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import './note-content.component.css';
import remarkGfm from 'remark-gfm';

export interface NoteContentParams {
  noteId: string;
}

enum NoteContentState {
  LOADING = 'LOADING',
  NOT_FOUND = 'NOT_FOUND',
  LOADED = 'LOADED',
}

export const NoteContent: FC<NoteContentParams> = (params) => {
  const [markdown, setMarkdown] = useState('');
  const [state, setState] = useState(NoteContentState.LOADING);

  useEffect(() => {
    (async () => {
      const note = ALL_NOTES.find((note: Note) => note.id === params.noteId);

      if (!note) {
        return;
      }

      const noteFileData = await fetch(
        `${NOTES_BASE_FILEPATH}${note.filepath}.md`,
      );

      if (noteFileData.status === 404) {
        setState(NoteContentState.NOT_FOUND);
        return;
      }

      const noteText = await noteFileData.text();

      setMarkdown(noteText);
      setState(NoteContentState.LOADED);
    })();
  }, [params.noteId]);

  return (
    <div className="note-content">
      {state === NoteContentState.LOADING && <p>Loading...</p>}
      {state === NoteContentState.NOT_FOUND && <p>¯\_(ツ)_/¯ </p>}
      {state === NoteContentState.LOADED && (
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        />
      )}
    </div>
  );
};
