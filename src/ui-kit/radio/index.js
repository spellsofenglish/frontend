/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

import './styles.scss';
import colors from '../../styles/colors';

const WZRadioView = withStyles({
  root: {
    color: colors.color_gray._4,
    '&$checked': {
      color: colors.color_basic._1,
    },
  },
  checked: {},
})((props) => {
  return (
    <button
      type="button"
      className="radio-button"
      disabled={props.disabled}
      onClick={props.onChange}
    >
      <Radio
        color="default"
        classes={props.classes}
        checked={props.checked}
        disabled={props.disabled}
      />
      {props.label && <span>{props.label}</span>}
    </button>
  );
});

/**
 * @component Radio
 * @example
 * <Radio
 *  disabled={false}
 *  onChange={() => {}}
 *  checked={false}
 *  label="Female"
 * />
 */
const WZRadio = (props) => {
  return (
    <WZRadioView
      disabled={props.disabled}
      onChange={() => props.onChange(!props.checked)}
      checked={props.checked}
      label={props.label}
    />
  );
};

/**
 * Properties
 */

WZRadio.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
};
WZRadio.defaultProps = {
  disabled: false,
  onChange: () => {},
  checked: false,
  label: null,
};

export default WZRadio;
