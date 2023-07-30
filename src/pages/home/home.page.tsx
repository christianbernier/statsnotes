import React, { FC } from 'react';

import './home.page.css';
import { NotesGrid } from '../../components/notes-grid/notes-grid.component';
import { ALL_NOTES } from '../../fixtures/notes';

export const HomePage: FC = () => {
  return (
    <div id="home-page--container">
      <div id="home-page--title">
        <span id="home-page--title-top">Stats</span>
        <span id="home-page--title-bottom">Notes</span>
      </div>
      <div>
        <p id="home-page--description">
          Notes from MATH 3081 (Probability and Statistics)
        </p>
      </div>
      <NotesGrid notes={ALL_NOTES} />
      <div>
        <span id="home-page--by-line">© 2023 Christian Bernier</span>
      </div>
    </div>
  );
};
