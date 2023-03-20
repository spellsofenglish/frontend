/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import Start from './forms/start';

const MainView = (props) => {
  return (
    <div id="--main-page">
      <div className="container">
        {!props.formToStart ? <Start setFormToStart={props.setFormToStart} /> : null}
      </div>
    </div>
  );
};

export default MainView;
