import PropTypes from 'prop-types';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const LinkBtn = ({ text, to }) => {
  return (
    <div className='link-btn'>
      <Link to={to}>
        <span className='text'>{text}</span>
        <span className='icon'>
          <Icon icon='ic:round-keyboard-arrow-right' width='18' height='18' />
        </span>
      </Link>
    </div>
  );
};
export default LinkBtn;
LinkBtn.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
