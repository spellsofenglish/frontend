/**
 * @prettier
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

import { Button, UserPhoto } from '../../ui-kit';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div id="--header">
      <div>
        <Button type="secondary" icon="home" onClick={() => navigate(-1)} />
        <div className="user">
          <Button type="secondary" icon="rules" onClick={props.showModalRules} />
          <UserPhoto />
        </div>
      </div>
    </div>
  );
};

export default Header;
