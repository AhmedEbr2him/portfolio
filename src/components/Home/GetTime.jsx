import PropTypes from 'prop-types';
const GetTime = ({ targetTime }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const prevYear = new Date(targetTime).getFullYear();
  const prevMonth = new Date(targetTime).getMonth();
  return <p className='time'>{`${currentYear - prevYear} year (${prevYear} - ${currentYear})`}</p>;
};
export default GetTime;

GetTime.propTypes = {
  targetTime: PropTypes.string,
};
