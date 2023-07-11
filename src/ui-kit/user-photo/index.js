/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Icon } from '../../ui-kit';

const UserPhoto = (props) => {
  const setClassName = () => {
    let str = `user-photo-root ${types[props.type]}`;

    str += props.url ? ' photo' : ' anon';

    return str;
  };

  return (
    <div className={setClassName()}>
      {props.url ? (
        <img src={props.url} alt="shjhsakjsa" />
      ) : (
        <Icon name="profile" fill="#9B9DAA" height="19px" width="19px" />
      )}
    </div>
  );
};

const types = {
  default: 'default',
  large: 'large',
};

UserPhoto.propTypes = {
  url: PropTypes.string,
  type: PropTypes.oneOf(['default', 'large']),
};

UserPhoto.defaultProps = {
  url: '',
  type: 'default',
};

export default UserPhoto;
