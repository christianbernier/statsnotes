import React, { FC } from 'react';

import './not-found.page.css';

export const NotFoundPage: FC = () => {
  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div id="not-found-page--container">
      <div id="not-found-page--title">
        <span id="not-found-page--title-1">P(</span>
        <span id="not-found-page--title-2">finding that page</span>
        <span id="not-found-page--title-3">)=0</span>
      </div>
      <div id="not-found-page--description-container">
        <p id="not-found-page--description">
          If you think this is a mistake, please contact Christian (
          <a href="https://cbernier.com">cbernier.com</a>).
        </p>
      </div>
      <button id="not-found--home-button" onClick={() => goToHome()}>
        Go home
      </button>
    </div>
  );
};
