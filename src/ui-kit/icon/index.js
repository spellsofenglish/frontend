/**
 * @prettier
 */

import PropTypes from 'prop-types';

import icons from './icons-list';

const Icon = (props) => {
  return icons[props.name]?.renderIcon({
    width: props.width,
    height: props.height,
    fill: props.fill,
  });
};

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  name: '',
  width: '16px',
  height: '16px',
  fill: '#FFFFFF',
};

export default Icon;
